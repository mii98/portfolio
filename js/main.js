const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');


menuToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('is-open');

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
})


navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
})


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMenu();
    }
})


function closeMenu () {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}