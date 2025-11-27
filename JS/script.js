// DARK / LIGHT TOGGLE
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// SCROLL ANIMATION
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
            sec.classList.add('show');
        }
    });
});