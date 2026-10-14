// js/app.js - Clean Uniform Grid & Scroll Header Logic
let favorites = JSON.parse(localStorage.getItem('kgt_favs')) || [];
let recentGames = JSON.parse(localStorage.getItem('kgt_recent')) || [];

function renderGames(filteredList = gamesList, containerId = 'games-container') {
    const container = document.getElementById(containerId);
    if (!container) return;

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

    if (favorites.includes(gameId)) {
        favorites = favorites.filter(id => id !== gameId);
        if (heartBtn) heartBtn.classList.remove('red-heart');
    } else {
        favorites.push(gameId);
        if (heartBtn) heartBtn.classList.add('red-heart');
    }

    localStorage.setItem('kgt_favs', JSON.stringify(favorites));
}

function playGame(gameId) {
    recentGames = recentGames.filter(id => id !== gameId);
    recentGames.unshift(gameId);
    localStorage.setItem('kgt_recent', JSON.stringify(recentGames));

    const game = gamesList.find(g => g.id === gameId);
    if (game) {
        window.open(game.iframeUrl, '_blank');
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
        // Niche scroll karne par header gayab ho jayega
        header.classList.add('header-hidden');
    } else {
        // Upar scroll karne par header wapas aa jayega
        header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document.addEventListener('DOMContentLoaded', () => {
    renderGames(gamesList);
});