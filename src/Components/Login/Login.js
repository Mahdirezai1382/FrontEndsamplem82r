export default function LoginButton() {
    document.body.insertAdjacentHTML(`beforeend`, `
        <button id="login-button" class="menu" style="right: 80px; left:auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-user-icon lucide-user">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
            </svg>
        </button>
    `);

    let style = document.createElement('style');
    style.textContent = `
        @import url("../../Theme/Style.css");

        .menu {
            position: absolute;
            top: 24px;
            left: 24px;
            z-index: 20;
            background: var(--menu-bg);
            color: var(--menu-color);
            border: none;
            font-size: 2rem;
            padding: 12px;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(60, 60, 100, 0.10);
            cursor: pointer;
            transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .menu:hover, .menu:focus {
            background: var(--menu-hover-bg);
            color: var(--menu-hover-color);
            box-shadow: 0 4px 16px rgba(60, 60, 100, 0.18);
            transform: translateY(-2px);
            outline: none;
        }

        .menu:active {
            transform: translateY(0);
        }

        .menu.hide {
            display: none;
        }

        /* Logged in state styling */
        .menu.logged-in {
            background: var(--accent-success);
            color: var(--text-primary);
        }

        .menu.logged-in:hover {
            background: var(--accent-success);
            opacity: 0.9;
        }
    `;

    document.head.appendChild(style);

    const loginButton = document.getElementById('login-button');

    // Check if user is already logged in
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        loginButton.classList.add('logged-in');
        loginButton.title = 'Already logged in - Click to logout';

        // Change icon to logout icon
        loginButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-log-out-icon lucide-log-out">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16,17 21,12 16,7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
        `;
    } else {
        loginButton.title = 'Click to login';
    }

    loginButton.addEventListener('click', () => {
        const loggedInUser = sessionStorage.getItem('loggedInUser');

        if (loggedInUser) {
            // User is logged in, show logout confirmation
            if (confirm('Are you sure you want to logout?')) {
                sessionStorage.removeItem('loggedInUser');
                alert('You have been logged out successfully.');
                window.location.reload(); // Refresh to update UI
            }
        } else {
            // User is not logged in, redirect to login page
            window.location.href = '../Login/index.html';
        }
    });
}
