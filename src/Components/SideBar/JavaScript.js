export default function SideBar() {
    document.body.insertAdjacentHTML(`beforeend`,`
<div class="sidebar closed">
    <div class="container">
        <p class="title">Coding Addict</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-x-icon lucide-x close">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    </div>
    <div class="container">
        <ul class="options">
            <li>
                <a href="#" id="Home">Home</a>
            </li>
            <li>
                <a href="#" id="About">About</a>
            </li>
            <li>
                <a href="#" id="Review">Review</a>
            </li>
            <li>
                <a href="#">Project</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </div>

</div>
<div class="menu1" id="SideBarBTN">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu">
        <path d="M4 12h16"/>
        <path d="M4 18h16"/>
        <path d="M4 6h16"/>
    </svg>
</div>`);


    var style = document.createElement('style');
    style.textContent = `
@import url("../../Theme/Style.css");

.sidebar {
    /*display: none;*/
    /*opacity: 0;*/
    background: var(--sidebar-bg);
    box-shadow: var(--sidebar-shadow);
    position: fixed;
    height: 100vh;
    left: 0;
    top: 0;
    width: 320px;
    max-width: 90vw;
    /*background: linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%);*/
    /*box-shadow: 2px 0 24px rgba(60, 60, 100, 0.15);*/
    border-radius: 0 24px 24px 0;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    z-index: 10;
    transition: transform 0.4s cubic-bezier(.4, 0, .2, 1);
    transform: translateX(0);
}

.sidebar.closed {
    transform: translateX(-110%);
}

.container {
    position: relative;
}

.title {
    font-size: 2.5rem;
    font-weight: 700;
    /*color: #fff;*/
    color: var(--sidebar-title);
    letter-spacing: 2px;
    margin-bottom: 8px;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.close {
    color: var(--close-color);
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    transition: color 0.2s;
    padding: 4px;
    border-radius: 50%;
}

.close:hover {
    color: var(--close-hover);
    background: rgba(255, 255, 255, 0.12);
}

.options {
    width: 100%;
    /*background: rgba(255, 255, 255, 0.15);*/
    background: var(--sidebar-options-bg);
    border-radius: 16px;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.options li {
    width: 100%;
    overflow: hidden;
    border-radius: 8px; /* Match the a's border-radius */
}

.options a {
    font-size: 1.5rem;
    /*color: #fff;*/
    color: var(--sidebar-link);
    font-weight: 500;
    padding: 12px 24px;
    border-radius: 8px;
    display: block;
    transition: background 0.2s, color 0.2s, transform 0.1s;
    letter-spacing: 1px;
}

.options a:hover {
    background: var(--sidebar-link-hover-bg);
    color: var(--sidebar-link-hover);
    transform: translateX(8px) scale(1.05);
    text-decoration: none;
}

.menu1 {
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

.menu1:hover, .menu:focus {
    background: var(--menu-hover-bg);
    color: var(--menu-hover-color);
    box-shadow: 0 4px 16px rgba(60, 60, 100, 0.18);
    outline: none;
}

.menu1.hide {
    display: none;
}

.Question {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: min(20vh, 80px);
    padding: 24px 16px;
    gap: 16px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}


.qBox{
    display: flex;
    flex-direction: column;
    background: var(--question-bg);
    border: 1px solid var(--question-border);
    border-radius: 20px;
    box-shadow: var(--question-shadow);
    color: var(--question-text);
    width: min(95vw, 700px);
    overflow: hidden;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
}

.qBox::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.qBox:hover::before {
    opacity: 1;
}

.qBox:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--border-medium);
}

.qTitle{
    background: var(--question-title-bg);
    border-bottom: 1px solid var(--question-border);
    padding: 20px 28px;
    margin: 0;
    font-weight: 600;
    font-size: 1.2rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    letter-spacing: 0.5px;
}
.qBox:hover .qTitle{
    background: var(--question-title-hover-bg);
    /*transform: translateX(6px);*/
    color: var(--accent-primary);
}

.qTitle::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.qBox:hover .qTitle::after{
    width:100%;
}

.qDetail{
    background: var(--question-detail-bg);
    padding: 0 28px;
    margin: 0;
    line-height: 1.7;
    font-size: 0.95rem;
    color: var(--text-secondary);
    /* Hide by default */
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out, padding 0.4s ease-in-out;
    /*padding-top: 0;*/
    /*padding-bottom: 0;*/
}

.qBox:hover .qDetail{
    /* Show on hover */
    max-height: 500px; /* Adjust based on your content */
    opacity: 1;
    padding-top: 24px;
    padding-bottom: 24px;
}

.qDetail ul {
    margin: 16px 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
}


.qDetail li {
    position: relative;
    padding: 16px 10px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translate3d(-20px, 0, 0);
}

.qDetail li:last-child {
    margin-bottom: 0;
}

.qBox:hover .qDetail li:nth-child(1) {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-delay: 0.1s;
}

.qBox:hover .qDetail li:nth-child(2) {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-delay: 0.2s;
}

.qBox:hover .qDetail li:nth-child(3) {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-delay: 0.3s;
}

.qBox:hover .qDetail li:nth-child(4) {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-delay: 0.4s;
}
.qDetail li::before {
    content: '';
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background: var(--accent-primary);
    border-radius: 50%;
    transition: all 0.3s ease;
}


/* Mobile optimizations */
@media (max-width: 768px) {
    .Question {
        padding: 16px 12px;
        gap: 24px;
    }

    .qBox {
        width: 100%;
        border-radius: 16px;
    }

    .qTitle {
        padding: 16px 20px;
        font-size: 1.1rem;
    }

    .qDetail {
        font-size: 0.9rem;
        line-height: 1.6;
    }

    .qBox:hover .qDetail {
        padding: 20px;
    }

    .qDetail li {
        padding: 12px 16px;
    }
}

/* Tablet optimizations */
@media (max-width: 1024px) {
    .qBox {
        width: min(90vw, 600px);
    }
}
`
    document.head.appendChild(style);


    const menu = document.querySelector('#SideBarBTN');
    const sideBar = document.querySelector('.sidebar');
    const close = document.querySelector('.close');
    const about = document.querySelector('#About')


// Open sidebar
    menu.addEventListener('mouseover', (e) => {
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


// close sidebar
    sideBar.addEventListener('mouseleave', (e) => {
        e.preventDefault();
        sideBar.classList.add('closed');
        document.body.style.overflow = '';

        setTimeout(() => {
            menu.classList.remove('hide');
        }, 400);
    })

    about.addEventListener('click', () => {
        location.href = '../../Pages/About/index.html';
    })
    const Home = document.querySelector('#HomeS');
    Home.addEventListener('click', () => {
        location.href = '../../Pages/Home/index.html';
    })

    const Review = document.querySelector('#Review');
    Review.addEventListener('click', () => {
        location.href = '../../Pages/Review/index.html';
    })
}