var footer = document.querySelector(".footer-text");

function AddFooterText() {
    footer.innerHTML = "Copyright &copy; " + new Date().getFullYear() + " Dylan Baker";
}

function RunFunctions() {
    AddFooterText();
}

RunFunctions();