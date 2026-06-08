// --- 1. DOM Elements ---
const loginView = document.getElementById('login-view');
const signupView = document.getElementById('signup-view');
const authContainer = document.getElementById('auth-container');
const dashboardContainer = document.getElementById('dashboard-container');

const showSignupBtn = document.getElementById('showSignup');
const showLoginBtn = document.getElementById('showLogin');

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const logoutBtn = document.getElementById('logoutBtn');
const welcomeMessage = document.getElementById('welcomeMessage');
const loginMessage = document.getElementById('login-message');

// Password Strength Elements
const signupPassword = document.getElementById('signupPassword');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');

// --- 2. View Toggling Logic ---
showSignupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginView.classList.add('hidden');
    signupView.classList.remove('hidden');
    loginMessage.classList.add('hidden'); // Hide success message if visible
});

showLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signupView.classList.add('hidden');
    loginView.classList.remove('hidden');
});

// --- 3. Password Strength Checker ---
signupPassword.addEventListener('input', () => {
    const val = signupPassword.value;
    let strength = 0;

    if (val.length >= 6) strength += 1;
    if (val.match(/[A-Z]/) && val.match(/[0-9]/)) strength += 1;
    if (val.match(/[^a-zA-Z\d]/)) strength += 1; // Special character

    // Reset classes
    strengthBar.className = 'strength-bar';

    if (val.length === 0) {
        strengthBar.style.width = '0%';
        strengthText.textContent = 'Password Strength';
        strengthText.style.color = '#888';
    } else if (strength === 1) {
        strengthBar.classList.add('weak');
        strengthText.textContent = 'Weak';
        strengthText.style.color = '#ff4d4d';
    } else if (strength === 2) {
        strengthBar.classList.add('medium');
        strengthText.textContent = 'Medium';
        strengthText.style.color = '#ffd11a';
    } else if (strength >= 3) {
        strengthBar.classList.add('strong');
        strengthText.textContent = 'Strong';
        strengthText.style.color = '#92a469';
    }
});

// --- 4. Authentication Logic ---

// Handle Sign Up
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Capture user identity
    const userName = document.getElementById('signupName').value;
    localStorage.setItem('carhub_username', userName);
    
    // Reset the form
    signupForm.reset();
    strengthBar.style.width = '0%';
    strengthText.textContent = 'Password Strength';
    
    // Route back to Login page instead of Dashboard
    signupView.classList.add('hidden');
    loginView.classList.remove('hidden');
    
    // Show success message
    loginMessage.classList.remove('hidden');
});

// Handle Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let storedName = localStorage.getItem('carhub_username');
    if (!storedName) storedName = "Valued Customer"; 
    
    // Hide auth container, show dashboard
    authContainer.classList.add('hidden');
    welcomeMessage.textContent = `Welcome back, ${storedName}!`;
    dashboardContainer.classList.remove('hidden');
});

// Handle Logout
logoutBtn.addEventListener('click', () => {
    dashboardContainer.classList.add('hidden');
    authContainer.classList.remove('hidden');
    
    signupView.classList.add('hidden');
    loginView.classList.remove('hidden');
    loginMessage.classList.add('hidden');
    
    loginForm.reset();
});