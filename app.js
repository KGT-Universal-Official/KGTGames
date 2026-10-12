// js/app.js - Main Application Logic
let favorites = JSON.parse(localStorage.getItem('kgt_favs')) || [];
let recentGames = JSON.parse(localStorage.getItem('kgt_recent')) || [];

function renderGames(filteredList = gamesList, containerId = 'games-container') {
    const container = document.getElementById(containerId);
    if(!container) return;
    
    container.innerHTML = '';
    
    filteredList.forEach(game => {
        const isFav = favorites.includes(game.id);
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div class="game-thumb-box" onclick="playGame('${game.id}')">
                <img src="${game.thumbnail}" alt="${game.title}">
                <button class="heart-btn ${isFav ? 'red-heart' : ''}" id="heart-${game.id}" onclick="toggleFavorite('${game.id}', event)">❤️</button>
            </div>
            <h3>${game.title}</h3>
            <p>${game.description}</p>
        `;
        container.appendChild(card);
    });
}

function toggleFavorite(gameId, event) {
    event.stopPropagation();
    const heartBtn = document.getElementById(`heart-${gameId}`);
    
    if (favorites.includes(gameId)) {
        favorites = favorites.filter(id => id !== gameId);
        if(heartBtn) heartBtn.classList.remove('red-heart');
    } else {
        favorites.push(gameId);
        if(heartBtn) heartBtn.classList.add('red-heart');
    }
    
    localStorage.setItem('kgt_favs', JSON.stringify(favorites));
}

function playGame(gameId) {
    recentGames = recentGames.filter(id => id !== gameId);
    recentGames.unshift(gameId);
    localStorage.setItem('kgt_recent', JSON.stringify(recentGames));
    
    const game = gamesList.find(g => g.id === gameId);
    if(game) {
        alert("Launching Game: " + game.title);
        // Yahan aap game play modal ya full screen iframe open kar sakte hain
    }
}

function filterCategory(category) {
    if(category === 'all') {
        renderGames(gamesList);
    } else {
        const filtered = gamesList.filter(g => g.category === category);
        renderGames(filtered);
    }
}

function filterGames() {
    const query = document.getElementById('game-search').value.toLowerCase();
    const filtered = gamesList.filter(g => g.title.toLowerCase().includes(query));
    renderGames(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    renderGames(gamesList);
});