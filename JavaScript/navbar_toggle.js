function NavSlide() {
    const hamBurger = document.querySelector(".hamburger-logo");
    const nav = document.querySelector(".nav-list");
    hamBurger.addEventListener("click", e => {
         nav.classList.toggle("toggle-nav");
    });
}

function RunEvents() {
    NavSlide();
}

RunEvents();
