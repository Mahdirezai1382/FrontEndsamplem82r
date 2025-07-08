import DarkMode from "../../Components/DarkMode/JavaScript.js";
import SideBar from "../../Components/SideBar/JavaScript.js";

DarkMode();
SideBar();

// local review data

const reviews = [
    {
        id: 1,
        name: 'Sunta',
        job: 'Web Developer',
        img: '../../img/About.jpg',
        text: 'An amazing developer who always delivers on time.'
    },
    {
        id: 2,
        name: 'Ali Reza',
        job: 'Backend Developer',
        img: '../../img/About.jpg',
        text: 'Very skilled in Node.js and database design.'
    },
    {
        id: 3,
        name: 'Niloofar',
        job: 'UI Designer',
        img: '../../img/About.jpg',
        text: 'Her designs are clean, modern, and user-friendly.'
    },
    {
        id: 4,
        name: 'Hossein',
        job: 'DevOps Engineer',
        img: '../../img/About.jpg',
        text: 'Always ensures smooth deployment and CI/CD.'
    },
    {
        id: 5,
        name: 'Fatemeh',
        job: 'Frontend Developer',
        img: '../../img/About.jpg',
        text: 'Writes clean and efficient React code.'
    },
    {
        id: 6,
        name: 'Mohammad',
        job: 'Data Scientist',
        img: '../../img/About.jpg',
        text: 'Excellent at building machine learning models.'
    },
    {
        id: 7,
        name: 'Parsa',
        job: 'Mobile Developer',
        img: '../../img/About.jpg',
        text: 'Creates responsive and fast mobile apps.'
    },
    {
        id: 8,
        name: 'Sara',
        job: 'QA Engineer',
        img: '../../img/About.jpg',
        text: 'Very detail-oriented and thorough with testing.'
    },
    {
        id: 9,
        name: 'Reza',
        job: 'Full Stack Developer',
        img: '../../img/About.jpg',
        text: 'Great at handling both frontend and backend tasks.'
    },
    {
        id: 10,
        name: 'Mahdi',
        job: 'AI Researcher',
        img: '../../img/About.jpg',
        text: 'Innovative thinker with deep knowledge of AI algorithms.'
    }
];

const img = document.querySelector('.review__img');
const name = document.querySelector('.review__name');
const job = document.querySelector('.review__position');
const text = document.querySelector('.review__text');

const prevBtn = document.querySelector('.review__arrow--prev');
const nextBtn = document.querySelector('.review__arrow--next');

let currentId = 1;
window.addEventListener('DOMContentLoaded', () => {
    const review = reviews[currentId - 1];
    img.src = review.img;
    name.textContent = review.name;
    job.textContent = review.job;
    text.textContent = review.text;


    // Navigation arrows
    const arrows = document.querySelectorAll('.review__arrow');
    const subscribeBtn = document.querySelector('.review__subscribe');

    // Navigation arrows
    arrows.forEach(arrow => {
        arrow.addEventListener('click', function() {
            const direction = this.dataset.direction;

            // Add loading state
            document.querySelector('.review').classList.add('review--loading');

            // Your navigation logic here
            console.log(`Navigate ${direction}`);

            // Remove loading state after animation
            setTimeout(() => {
                document.querySelector('.review').classList.remove('review--loading');
            }, 500);
        });
    });

    // Subscribe button
    subscribeBtn?.addEventListener('click', function() {
        console.log('Subscribe clicked');
        // Your subscription logic here
    });
});

prevBtn.addEventListener('click', () => {
    if (currentId === 1) {
        currentId = reviews.length;
    }
    currentId--;
    const review = reviews[currentId - 1];
    img.src = review.img;
    name.textContent = review.name;
    job.textContent = review.job;
    text.textContent = review.text;
})

nextBtn.addEventListener('click', () => {
    if (currentId === reviews.length) {
        currentId = 1;
    }
    currentId++;
    const review = reviews[currentId - 1];
    img.src = review.img;
    name.textContent = review.name;
    job.textContent = review.job;
    text.textContent = review.text;
})



