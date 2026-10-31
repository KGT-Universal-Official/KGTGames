// js/auth.js - Firebase Google Sign-In & Cloud Sync Handler

const firebaseConfig = {
    apiKey: "AIzaSyDxRerfvoPWliFPRN8ETCHnvYju-2JKIwI",
    authDomain: "kgt-games-portal.firebaseapp.com",
    projectId: "kgt-games-portal",
    storageBucket: "kgt-games-portal.firebasestorage.app",
    messagingSenderId: "572238675830",
    appId: "1:572238675830:web:5253a78a0abceed4af0457",
    measurementId: "G-M7W4HRP700"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

// Handle Profile Click (Login / Logout)
function handleProfileClick() {
    const user = auth.currentUser;
    if (user) {
        if (confirm(`Logged in as ${user.displayName}. Do you want to logout?`)) {
            auth.signOut().then(() => {
                localStorage.removeItem('kgt_user');
                updateUIState(null);
                location.reload();
            });
        }
    } else {
        // Trigger Google Popup Login
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                saveUserDataToCloud(user);
                updateUIState(user);
            })
            .catch((error) => {
                console.error("Login Error: ", error);
                alert("Google Sign-In failed. Please try again.");
            });
    }
}

// Update UI state based on Firebase Auth user
function updateUIState(user) {
    const profileBtn = document.getElementById('profile-btn');
    if (user && profileBtn) {
        profileBtn.innerHTML = `
            <img src="${user.photoURL}" class="user-avatar" alt="User" style="width:24px; height:24px; border-radius:50%; vertical-align:middle; margin-right:5px; object-fit:cover;">
            <span>${user.displayName ? user.displayName.split(' ')[0] : 'Account'}</span>
        `;
    } else if (profileBtn) {
        profileBtn.innerHTML = `👤 Account`;
    }
}

// Save or Sync User Data with Firestore
function saveUserDataToCloud(user) {
    const userRef = db.collection('users').doc(user.uid);
    userRef.get().then((doc) => {
        if (!doc.exists) {
            // First time login, save local data to cloud
            userRef.set({
                name: user.displayName,
                email: user.email,
                favorites: JSON.parse(localStorage.getItem('kgt_favs')) || [],
                recent: JSON.parse(localStorage.getItem('kgt_recent')) || []
            });
        } else {
            // Existing user, sync cloud data to local storage
            const data = doc.data();
            if(data.favorites) {
                localStorage.setItem('kgt_favs', JSON.stringify(data.favorites));
                window.favorites = data.favorites;
            }
            if(data.recent) {
                localStorage.setItem('kgt_recent', JSON.stringify(data.recent));
                window.recentGames = data.recent;
            }
            if (typeof renderGames === 'function' && typeof gamesList !== 'undefined') {
                renderGames(gamesList);
            }
        }
    });
}

// Check auth state on page load
auth.onAuthStateChanged((user) => {
    if (user) {
        updateUIState(user);
        saveUserDataToCloud(user);
    } else {
        updateUIState(null);
    }
});