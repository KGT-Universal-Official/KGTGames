// js/app.js - Clean Uniform Grid & Scroll Health with Live LocalStorage Sync

function getFavorites() {
    return JSON.parse(localStorage.getItem('kgt_favs')) || [];
}

function getRecentGames() {
    return JSON.parse(localStorage.getItem('kgt_recent')) || [];
}

function renderGames(filteredList = gamesList, containerId = 'games-container') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const favorites = getFavorites();
    container.innerHTML = '';

    filteredList.forEach((game) => {
        const isFav = favorites.includes(game.id);
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div class="game-thumb-box" onclick="playGame('${game.id}')">
                <img src="${game.thumbnail}" alt="${game.title}" loading="lazy">
                <button class="heart-btn ${isFav ? 'red-heart' : ''}" id="heart-${game.id}" onclick="toggleFavorite('${game.id}', event)">❤️</button>
                <div class="game-title-overlay">${game.title}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

function toggleFavorite(gameId, event) {
    event.stopPropagation();
    const heartBtn = document.getElementById(`heart-${gameId}`);
    let favorites = getFavorites();

    if (favorites.includes(gameId)) {
        favorites = favorites.filter(id => id !== gameId);
        if (heartBtn) heartBtn.classList.remove('red-heart');
    } else {
        favorites.push(gameId);
        if (heartBtn) heartBtn.classList.add('red-heart');
    }

    localStorage.setItem('kgt_favs', JSON.stringify(favorites));
    syncUserDataToFirebase();
}

function playGame(gameId) {
    let recentGames = getRecentGames();
    recentGames = recentGames.filter(id => id !== gameId);
    recentGames.unshift(gameId);
    localStorage.setItem('kgt_recent', JSON.stringify(recentGames));
    syncUserDataToFirebase();

    const game = gamesList.find(g => g.id === gameId);
    if (game) {
        const modal = document.getElementById('game-modal');
        const iframe = document.getElementById('game-iframe');
        const titleSpan = document.getElementById('playing-game-title');

        if(modal && iframe) {
            titleSpan.innerText = game.title;
            iframe.src = game.iframeUrl;
            modal.style.display = 'flex';
        } else {
            window.open(game.iframeUrl, '_blank');
        }
    }
}

// Helper to sync favorites & recents to Firestore if user is logged in
function syncUserDataToFirebase() {
    if (typeof firebase !== 'undefined' && firebase.auth) {
        const user = firebase.auth().currentUser;
        if (user) {
            firebase.firestore().collection('users').doc(user.uid).set({
                favorites: getFavorites(),
                recent: getRecentGames()
            }, { merge: true }).catch((err) => {
                console.log("Cloud sync error: ", err);
            });
        }
    }
}

function closeGameModal() {
    const modal = document.getElementById('game-modal');
    const iframe = document.getElementById('game-iframe');
    if(modal && iframe) {
        iframe.src = ""; 
        modal.style.display = 'none';
    }
}

function filterCategory(category, element) {
    if(element) {
        document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
        element.classList.add('active');
    }

    document.querySelectorAll('.nav-card').forEach(btn => btn.classList.remove('active'));
    const navAll = document.getElementById('nav-all');
    if(navAll) navAll.classList.add('active');

    if (category === 'all') {
        renderGames(gamesList);
    } else {
        const filtered = gamesList.filter(g => g.category && g.category.toLowerCase() === category.toLowerCase());
        renderGames(filtered);
    }
}

function filterGames() {
    const query = document.getElementById('game-search').value.toLowerCase();
    const filtered = gamesList.filter(g => g.title.toLowerCase().includes(query));
    renderGames(filtered);
}

// Smart Auto-Hide Header on Scroll Logic
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    const header = document.querySelector('.app-header');
    if (!header) return;
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 80) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document.addEventListener('DOMContentLoaded', () => {
    renderGames(gamesList);
});