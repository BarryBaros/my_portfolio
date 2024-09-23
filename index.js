/* Click function for About Section */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('read-more-btn').onclick = function () {
        var moreText = document.getElementById("more-text");
        var btnText = document.getElementById("read-more-btn");

        if (moreText.style.display === "none") {
            moreText.style.display = "inline";
            btnText.innerHTML = "Read Less"; 
        } else {
            moreText.style.display = "none";
            btnText.innerHTML = "Read More"; 
        }
    };
});

/* Click function for Service Section */
document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll('.btn.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moreText = document.getElementById(this.getAttribute('data-target'));
            const btnText = this;
            if (moreText.style.display === "none" || moreText.style.display === "") {
                moreText.style.display = "inline";
                btnText.innerHTML = "Read Less";
            } else {
                moreText.style.display = "none";
                btnText.innerHTML = "Read More";
            }
        });
    });
});

/* Toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Function for debounce */
function debounce(func, wait = 15, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

/* Scroll section active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = debounce(function() {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* Sticky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

/* Scroll reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* Typed.js */
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Fullstack Developer', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
