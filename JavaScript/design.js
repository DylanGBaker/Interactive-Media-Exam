const navBarLinks = document.querySelectorAll(".u-url");
var hrefs = ["../index.html", "../Blogs/blog.html", "design.html", "../Portfolio/portfolio.html", "../Contact/contact.html"]; //Initilaizing the file paths

function GetNewPageLocation(i) {
    location.href = hrefs[i];
}

function ChangePageOnClick() {
    navBarLinks[0].addEventListener("click", e=> GetNewPageLocation(0));
    navBarLinks[1].addEventListener("click", e=> GetNewPageLocation(1));
    navBarLinks[2].addEventListener("click", e=> GetNewPageLocation(2));
    navBarLinks[3].addEventListener("click", e=> GetNewPageLocation(3));
    navBarLinks[4].addEventListener("click", e=> GetNewPageLocation(4));
}

const designPageImgs = ["Images/Wireframe-and-Style-Guide-1.png", 
"Images/Wireframe-and-Style-Guide-2.png",
"Images/Wireframe-and-Style-Guide-3.png",
"Images/Wireframe-and-Style-Guide-4.png",
"Images/Wireframe-and-Style-Guide-5.png",
"Images/Wireframe-and-Style-Guide-6.png",
"Images/Wireframe-and-Style-Guide-7.png",
"Images/Wireframe-and-Style-Guide-8.png",
"Images/Wireframe-and-Style-Guide-9.png"]; 

var designSection = document.querySelector(".design");

function AddImagesToDesignPage() {
    for (var i = 0; i < designPageImgs.length; i++) {
        var figureTag = document.createElement("figure");
        var imgTag = document.createElement("img");
        designSection.appendChild(figureTag).appendChild(imgTag);
        figureTag.classList.add("u=photo");
        imgTag.classList.add("wireframes-and-style-guide-images");
        imgTag.src = designPageImgs[i];
    }
}

function RunEvents() {
    ChangePageOnClick();
    AddImagesToDesignPage();
}

RunEvents();
console.log(window.location.pathname);