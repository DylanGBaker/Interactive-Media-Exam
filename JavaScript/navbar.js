const navBarLinks = document.querySelectorAll(".navlink");
var filePaths = ["placeholder text"]; 

function InitialiseFilePaths() {
    if (window.location.pathname == "/index.html"){ filePaths = ["index.html", "/Blogs/blog.html", "/Design/design.html", "/Portfolio/portfolio.html", "/Contact/contact.html"];}
    else if (window.location.pathname == "/Blogs/blog.html"){ filePaths = ["../index.html", "blog.html", "../Design/design.html", "../Portfolio/portfolio.html", "../Contact/contact.html"];}
    else if (window.location.pathname == "/Design/design.html"){ filePaths = ["../index.html", "../Blogs/blog.html", "design.html", "../Portfolio/portfolio.html", "../Contact/contact.html"];}
    else if (window.location.pathname == "/Portfolio/portfolio.html"){ filePaths = ["../index.html", "../Blogs/blog.html", "../Design/design.html", "portfolio.html", "../Contact/contact.html"];}
    else if (window.location.pathname == "/Contact/contact.html"){ filePaths = ["../index.html", "../Blogs/blog.html", "../Design/design.html", "../Portfolio/portfolio.html", "contact.html"];}
    else if (window.location.pathname == "/About/about.html"){filePaths = ["../index.html", "../Blogs/blog.html", "../Design/design.html", "../Portfolio/portfolio.html", "../Contact/contact.html"];}
    else {filePaths = ["../index.html", "blog.html", "../Design/design.html", "../Portfolio/portfolio.html", "../Contact/contact.html"];}
}

function GetNewPageLocation(i) {
    window.location.href = filePaths[i];
}

function NavBarClickEvents() {
    navBarLinks[0].addEventListener("click", e => GetNewPageLocation(0));
    navBarLinks[1].addEventListener("click", e => GetNewPageLocation(1));
    navBarLinks[2].addEventListener("click", e => GetNewPageLocation(2));
    navBarLinks[3].addEventListener("click", e => GetNewPageLocation(3));
    navBarLinks[4].addEventListener("click", e => GetNewPageLocation(4));
}

function NavSlide() {
    const hamBurger = document.querySelector(".hamburger-logo");
    const nav = document.querySelector(".nav-list");
    hamBurger.addEventListener("click", e => {
         nav.classList.toggle("toggle-nav");
    });
}

function RunApp() {
    InitialiseFilePaths();
    NavBarClickEvents();
    NavSlide();
}

RunApp();
