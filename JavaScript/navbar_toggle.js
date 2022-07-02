function NavSlide() {
    const hamBurger = document.querySelector(".Hamburger_Logo");
    const nav = document.querySelector(".nav-list");
    hamBurger.addEventListener("click", e => {
         nav.classList.toggle("toggle_nav");
    });
}

function RunEvents() {
    NavSlide();
}

RunEvents();
