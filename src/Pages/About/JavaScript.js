import DarkMode from '../../Components/DarkMode/JavaScript.js'
import SideBar from '../../Components/SideBar/JavaScript.js'
import LoginButton from "../../Components/Login/Login.js";

document.addEventListener("DOMContentLoaded", () => {
    SideBar();
    DarkMode();
    LoginButton();
});

document.querySelectorAll('.about__tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.target;

        document.querySelector('.about').classList.add('about--loading');

        document.querySelectorAll('.about__panel').forEach(panel => {
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(10px)';
        });

        document.querySelectorAll('.about__tab').forEach(t =>
            t.setAttribute('aria-selected', t === tab)
        );

        setTimeout(() => {
            document.querySelectorAll('.about__panel').forEach(panel => {
                panel.hidden = panel.id !== `panel-${target}`;
            });

            document.querySelector('.about').classList.remove('about--loading');
        }, 200);
    });
});