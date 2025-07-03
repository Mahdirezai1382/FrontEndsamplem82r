let menu = document.querySelector('.menu');
let sideBar = document.querySelector('.sidebar');
let close = document.querySelector('.close');

// Open sidebar
menu.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('hide');          // Hide menu button
    sideBar.classList.remove('closed');  // Slide sidebar in
    document.body.style.overflow = 'hidden';

});

// Close sidebar
close.addEventListener('click', (e) => {
    e.preventDefault();
    sideBar.classList.add('closed');
    document.body.style.overflow = '';

    setTimeout(() => {
        menu.classList.remove('hide');
    }, 400);
});

const toggle = document.getElementById('toggle-theme');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

