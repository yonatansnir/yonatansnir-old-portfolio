var isOpen = 0;
var menu = document.querySelector("#menu");
var menuLine1 = document.querySelector(".line1");
var menuLine2 = document.querySelector(".line2");
var menuLine3 = document.querySelector(".line3");
function ocMenu(){
    if (isOpen == 0) {
        menu.style.transform = "translateX(0%)";
        menuLine1.style.transform = "rotate(-28deg) translateY(5px)";
        menuLine3.style.transform = "rotate(28deg) translateY(-5px)";
        menuLine2.style.opacity = "0";
        isOpen = 1;
    } else {
        menu.style.transform = "translateX(-100%)";
        menuLine1.style.transform = "rotate(0deg) translateY(0px)";
        menuLine3.style.transform = "rotate(0deg) translateY(0px)";
        menuLine2.style.opacity = "1";
        isOpen = 0;
    }
}