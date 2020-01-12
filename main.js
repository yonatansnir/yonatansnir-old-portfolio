var pages = document.getElementById("pages");
var about = document.getElementById("about");
var abouttext = document.getElementById("about-text");
var closeabout = document.getElementById("closeabout");

function page(num){
    pages.style.transform = "translateY(" + num + "%)";
    document.getElementById("point-0").classList.remove("point-on");
    document.getElementById("point--100").classList.remove("point-on");
    document.getElementById("point--200").classList.remove("point-on");
    document.getElementById("point-"+num).classList.toggle("point-on");
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

// var current = 1;
// setInterval(() => {
//     for (let i = 1; i <= 5; i++) {
//         document.getElementById("c"+i).style.display = "none";  
//     }
//     document.getElementById("c"+current).style.display = "block";
    
//     current > 4 ? current = 1 : current++;
//     // if (current > 5) {current = 1}
//     // else {current++};
// }, 2500);
