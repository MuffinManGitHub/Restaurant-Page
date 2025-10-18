const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const aboutBtn = document.querySelector('.about');

if (homeBtn) {
    homeBtn.addEventListener('click', () => {
        window.location.href = 'home.html';
    });
}
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        window.location.href = 'menu.html';
    });
}
if (aboutBtn) {
    aboutBtn.addEventListener('click', () => {
        window.location.href = 'about.html';
    });
}