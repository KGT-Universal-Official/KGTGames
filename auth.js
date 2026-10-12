// js/auth.js - Google Sign-In & Profile Handler

// JWT Token Decoder function
function parseJwt(token) {
    try {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('0' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        return null;
    }
}

function handleCredentialResponse(response) {
    const responsePayload = parseJwt(response.credential);
    if(responsePayload) {
        localStorage.setItem('kgt_user', JSON.stringify({
            name: responsePayload.name,
            email: responsePayload.email,
            picture: responsePayload.picture
        }));
        updateUIState();
    }
}

function updateUIState() {
    const user = JSON.parse(localStorage.getItem('kgt_user'));
    const profileBtn = document.getElementById('profile-btn');

    if (user && profileBtn) {
        profileBtn.innerHTML = `
            <img src="${user.picture}" class="user-avatar" alt="User" style="width:24px; border-radius:50%; vertical-align:middle; margin-right:5px;">
            <span>${user.name}</span>
        `;
    }
}

function googleAccountSwitch() {
    localStorage.removeItem('kgt_user');
    if (typeof google !== 'undefined' && google.accounts) {
        google.accounts.id.disableAutoSelect();
        google.accounts.id.prompt();
    }
    location.reload();
}

function handleProfileClick() {
    const user = JSON.parse(localStorage.getItem('kgt_user'));
    if(user) {
        if(confirm("Do you want to switch or logout from your Google account?")) {
            googleAccountSwitch();
        }
    } else {
        // Trigger Google Login prompt if available
        if (typeof google !== 'undefined' && google.accounts) {
            google.accounts.id.prompt();
        } else {
            alert("Google Sign-In is initializing. Please try again in a moment.");
        }
    }
}

window.onload = function() {
    updateUIState();
    if (typeof google !== 'undefined' && google.accounts) {
        google.accounts.id.initialize({
            client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com", // Yahan apna Google Cloud Client ID daalna hai
            callback: handleCredentialResponse
        });
    }
};