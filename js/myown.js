
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768) {  // 768px is a common threshold for mobile devices
        var typed = new Typed(".text", {
            strings: ["FRONTEND DEVELOPER", "WEB DEVELOPER"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }

    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');

    menu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });


});

