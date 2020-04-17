var pages = document.getElementById("pages");
var about = document.getElementById("about");
var abouttext = document.getElementById("about-text");
var closeabout = document.getElementById("closeabout");

let currentPage = 0;
let numOfTimes = 0;

function page(num){
    currentPage = num;
    let pageNum = num * -100;
    pages.style.transform = "translateY(" + pageNum + "%)";
    document.getElementById("point-0").classList.remove("point-on");
    document.getElementById("point--100").classList.remove("point-on");
    document.getElementById("point--200").classList.remove("point-on");
    document.getElementById("point-"+pageNum).classList.toggle("point-on");
}

function toggleResume(num){
    if (num == 1) {
        about.style.display = "block";
        abouttext.style.display = "none";
        closeabout.style.display = "block";
        document.querySelector("h1").style.color = "rgb(87, 87, 87)";
    } else {
        about.style.display = "none";
        abouttext.style.display = "block";
        closeabout.style.display = "none";
        document.querySelector("h1").style.color = "rgb(61, 115, 231)";
    }
}

pages.addEventListener('wheel', handleWheel);

function handleWheel(e){
    pages.removeEventListener('wheel', handleWheel);
    setTimeout(() => pages.addEventListener('wheel', handleWheel), 1500)
    handleDirection(e.deltaY);
}

function handleDirection(direction){
    if (direction > 0){
        switch (currentPage) {
            case 0:
                page(currentPage + 1)
                break;
            case 1:
                page(currentPage + 1);
                break;
            default:
                break;
        }
    } else {
        switch (currentPage) {
            case 1:
                page(currentPage - 1)
                break;
            case 2:
                page(currentPage - 1);
                break;
            default:
                break;
        }
    }
}