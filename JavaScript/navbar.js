const navBarLinks = document.querySelectorAll(".navlink");
var filePaths = ["placeholder text"]; 

function InitialiseFilePaths() {
    if (window.location.pathname == "/Interactive-Media-Exam/index.html"){ filePaths = ["/Interactive-Media-Exam/index.html", "/Interactive-Media-Exam/Blogs/blog.html", "/Interactive-Media-Exam/Design/design.html", "/Interactive-Media-Exam/Portfolio/portfolio.html", "/Interactive-Media-Exam/Contact/contact.html"];}
    else if (window.location.pathname == "/Interactive-Media-Exam/Blogs/blog.html"){ filePaths = ["../Interactive-Media-Exam/index.html", "/Interactive-Media-Exam/blog.html", "../Interactive-Media-Exam/Design/design.html", "../Interactive-Media-Exam/Portfolio/portfolio.html", "../Interactive-Media-Exam/Contact/contact.html"];}
    else if (window.location.pathname == "/Interactive-Media-Exam/Design/design.html"){ filePaths = ["../Interactive-Media-Exam/index.html", "../Interactive-Media-Exam/Blogs/blog.html", "/Interactive-Media-Exam/design.html", "../Interactive-Media-Exam/Portfolio/portfolio.html", "../Interactive-Media-Exam/Contact/contact.html"];}
    else if (window.location.pathname == "/Interactive-Media-Exam/Portfolio/portfolio.html"){ filePaths = ["../Interactive-Media-Exam/index.html", "../Interactive-Media-Exam/Blogs/blog.html", "../Interactive-Media-Exam/Design/design.html", "/Interactive-Media-Exam/portfolio.html", "../Interactive-Media-Exam/Contact/contact.html"];}
    else if (window.location.pathname == "/Interactive-Media-Exam/Contact/contact.html"){ filePaths = ["../Interactive-Media-Exam/index.html", "../Interactive-Media-Exam/Blogs/blog.html", "../Interactive-Media-Exam/Design/design.html", "../Interactive-Media-Exam/Portfolio/portfolio.html", "/Interactive-Media-Exam/contact.html"];}
    else if (window.location.pathname == "/Interactive-Media-Exam/About/about.html"){filePaths = ["../Interactive-Media-Exam/index.html", "../Interactive-Media-Exam/Blogs/blog.html", "../Interactive-Media-Exam/Design/design.html", "../Interactive-Media-Exam/Portfolio/portfolio.html", "../Interactive-Media-Exam/Contact/contact.html"];}
    else {filePaths = ["../Interactive-Media-Exam/index.html", "/Interactive-Media-Exam/blog.html", "../Interactive-Media-Exam/Design/design.html", "../Interactive-Media-Exam/Portfolio/portfolio.html", "../Interactive-Media-Exam/Contact/contact.html"];}
    console.log(window.location.pathname);
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
