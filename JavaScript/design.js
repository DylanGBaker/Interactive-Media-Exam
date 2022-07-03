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

function RunApp() {
    AddImagesToDesignPage();
}

RunApp();
