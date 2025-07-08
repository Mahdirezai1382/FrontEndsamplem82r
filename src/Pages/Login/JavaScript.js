import DarkMode from "../../Components/DarkMode/JavaScript.js";
import SideBar from "../../Components/SideBar/JavaScript.js";

DarkMode();
SideBar();

const Users = [
    {
        Username: "engineer.m.rezai@gmail.com",
        Password: "12345"
    },
    {
        Username: "user1@example.com",
        Password: "pass123"
    },
    {
        Username: "user2@example.com",
        Password: "helloWorld"
    },
    {
        Username: "user3@example.com",
        Password: "admin2025"
    },
    {
        Username: "user4@example.com",
        Password: "qwerty"
    },
    {
        Username: "user5@example.com",
        Password: "letmein"
    },
    {
        Username: "user6@example.com",
        Password: "password6"
    },
    {
        Username: "user7@example.com",
        Password: "mahdiDev7"
    },
    {
        Username: "user8@example.com",
        Password: "testPass8"
    },
    {
        Username: "user9@example.com",
        Password: "secure9!"
    }
];

// DOM Elements
const loginForm = document.querySelector('.login__form');
const usernameInput = document.querySelector('#userName');
const passwordInput = document.querySelector('#password');
const submitBtn = document.querySelector('.login__submit');
const loginContainer = document.querySelector('.login__container');

// Error message elements
const usernameField = usernameInput?.closest('.login__field');
const passwordField = passwordInput?.closest('.login__field');
const usernameError = usernameField?.querySelector('.login__error-message');
const passwordError = passwordField?.querySelector('.login__error-message');

// Validation functions
function showError(input, field, errorElement, message) {
    input.classList.add('error');
    field.classList.add('has-error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function hideError(input, field, errorElement) {
    input.classList.remove('error');
    field.classList.remove('has-error');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

function validateUsername(username) {
    if (username.trim() === '') {
        showError(usernameInput, usernameField, usernameError, 'Username is required');
        return false;
    }

    if (username.length < 3) {
        showError(usernameInput, usernameField, usernameError, 'Username must be at least 3 characters');
        return false;
    }

    hideError(usernameInput, usernameField, usernameError);
    return true;
}

function validatePassword(password) {
    if (password.trim() === '') {
        showError(passwordInput, passwordField, passwordError, 'Password is required');
        return false;
    }

    if (password.length < 3) {
        showError(passwordInput, passwordField, passwordError, 'Password must be at least 3 characters');
        return false;
    }

    hideError(passwordInput, passwordField, passwordError);
    return true;
}

function authenticateUser(username, password) {
    return Users.find(user =>
        user.Username === username && user.Password === password
    );
}

function showLoadingState() {
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
}

function hideLoadingState() {
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
}

function shakeContainer() {
    loginContainer.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        loginContainer.style.animation = '';
    }, 500);
}

// Event Listeners

// Clear errors on input
usernameInput?.addEventListener('input', () => {
    if (usernameInput.classList.contains('error')) {
        hideError(usernameInput, usernameField, usernameError);
    }
});

passwordInput?.addEventListener('input', () => {
    if (passwordInput.classList.contains('error')) {
        hideError(passwordInput, passwordField, passwordError);
    }
});

// Validate on blur
usernameInput?.addEventListener('blur', () => {
    validateUsername(usernameInput.value);
});

passwordInput?.addEventListener('blur', () => {
    validatePassword(passwordInput.value);
});

// Form submission
loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = e.target.UserName.value.trim();
    const password = e.target.Password.value.trim();

    // Validate both fields
    const isUsernameValid = validateUsername(userName);
    const isPasswordValid = validatePassword(password);

    // If validation fails, shake container and return
    if (!isUsernameValid || !isPasswordValid) {
        shakeContainer();
        return;
    }

    // Show loading state
    showLoadingState();

    // Simulate API call delay
    setTimeout(() => {
        const user = authenticateUser(userName, password);

        hideLoadingState();

        if (user) {
            // Success notification
            alert("Login Successful! Welcome back.");

            // Optional: Store user session (if needed)
            sessionStorage.setItem('loggedInUser', JSON.stringify({
                username: user.Username,
                loginTime: new Date().toISOString()
            }));

            // Redirect to dashboard
            history.back();
        } else {
            // Failed authentication
            alert("Invalid username or password. Please try again.");

            // Add error state to both fields
            showError(usernameInput, usernameField, usernameError, 'Invalid credentials');
            showError(passwordInput, passwordField, passwordError, 'Invalid credentials');

            // Shake container
            shakeContainer();

            // Clear password field for security
            passwordInput.value = '';
        }
    }, 1500); // 1.5 second delay to simulate real API call
});

// Password toggle functionality
const loginTogglePassword = document.querySelector('.login__toggle-password');
const eyeIcon = loginTogglePassword?.querySelector('.login__eye');

loginTogglePassword?.addEventListener('click', () => {
    const password = document.querySelector('#password');

    if (password.type === 'password') {
        // Show password
        password.type = 'text';

        // Update icon to "eye-off"
        if (eyeIcon) {
            eyeIcon.innerHTML = `
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                <line x1="2" y1="2" x2="22" y2="22"/>
            `;
        }
    } else {
        // Hide password
        password.type = 'password';

        // Update icon to "eye"
        if (eyeIcon) {
            eyeIcon.innerHTML = `
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
            `;
        }
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Submit form on Ctrl+Enter
    if (e.ctrlKey && e.key === 'Enter') {
        loginForm?.dispatchEvent(new Event('submit'));
    }

    // Clear form on Escape
    if (e.key === 'Escape') {
        usernameInput.value = '';
        passwordInput.value = '';
        hideError(usernameInput, usernameField, usernameError);
        hideError(passwordInput, passwordField, passwordError);
    }
});

// Auto-focus username field when page loads
document.addEventListener('DOMContentLoaded', () => {
    usernameInput?.focus();
});
