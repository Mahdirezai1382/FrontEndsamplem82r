export default function DarkMode() {
    document.body.insertAdjacentHTML(`beforeend`,`<button id="toggle-theme" class="menu" style="right: 24px; left:auto">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
     class="lucide lucide-moon-icon lucide-moon">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
</svg>
</button>`);

    var style = document.createElement('style');
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
transition: background 0.2s, color 0.2s, box-shadow 0.2s;
display: flex;
align-items: center;
justify-content: center;
}

.menu:hover, .menu:focus {
background: var(--menu-hover-bg);
color: var(--menu-hover-color);
box-shadow: 0 4px 16px rgba(60, 60, 100, 0.18);
outline: none;
}

.menu.hide {
display: none;
}
`
    document.head.appendChild(style);


    const toggle = document.getElementById('toggle-theme');

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });

}