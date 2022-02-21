const hamburger_icon = document.querySelector(".hamburger_icon")

function hamburger_click() {
    var show_hamburger = document.getElementById("hamburger_div")
    if (show_hamburger.style.display === "none") {
        show_hamburger.style.display = "block"
    } else {
        show_hamburger.style.display = "none"
    }
}

hamburger_icon.addEventListener("click", hamburger_click)