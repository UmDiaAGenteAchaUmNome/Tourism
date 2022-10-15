/***------------------ Show Menu --------------------***/

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/***-------------- Remove Menu Mobile ---------------***/

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/***------------ Change Background Header -----------***/

function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/***---------------- Swiper Discover ----------------***/

let swiper = new Swiper('.discover-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});

/***---------------- Swiper Sponsor ----------------***/

let swiperTwo = new Swiper('.sponsor-container', {
    centeredSlides: true,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 32,
});

/***--------------------- Video ---------------------***/

const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-btn');
const videoIcon = document.getElementById('video-icon');

function playPause() {
    if (videoFile.paused) {
        videoFile.play();
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    } else {
        videoFile.pause();
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
    }
}
videoButton.addEventListener('click', playPause);

function finalVideo() {
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}
videoFile.addEventListener('ended', finalVideo);

/***----------------- Show Scroll Up ----------------***/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/***---------- Scroll Sections Active Link ----------***/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector('.nav-menu a[href*=' + sectionId + ']')
                .classList.add('active-link');
        } else {
            document
                .querySelector('.nav-menu a[href*=' + sectionId + ']')
                .classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/***--------------- Dark Light Theme ----------------***/

const themeButton = document.getElementById('theme-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        darkTheme
    );
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
        iconTheme
    );
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/***------------ Scroll Reveal Animation ------------***/

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
});

sr.reveal(
    `.home-data, .social-link, .home-info, .discover-container, .experience-data, 
        .experience-overlay, .place-card, .sponsor-content, .footer-data, 
        .footer-info, .footer-rights`,
    {
        origin: 'top',
        interval: 100,
    }
);

sr.reveal(`.about-data, .video-container p, .subscribe-container p`, {
    origin: 'left',
});

sr.reveal(`.about-img-overlay, .video-content, .subscribe-form`, {
    origin: 'right',
    interval: 100,
});
