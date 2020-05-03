const about = document.getElementById('about');
// const h1 = document.querySelector('h1');
const logo = document.getElementById('logo');
const aboutText = document.getElementById('about-text');

let isOpen = true;
function toggleResume(){
    if (isOpen){
        about.style.display = "block";
        aboutText.innerHTML = "&#10006;"
        logo.style.fill = "rgb(87, 87, 87)";
        // h1.style.color = "rgb(87, 87, 87)";
    } else {
        about.style.display = "none";
        aboutText.innerHTML = "About me"
        logo.style.fill = "rgb(61, 115, 231)";
        // h1.style.color = "rgb(61, 115, 231)";

    }
    isOpen = !isOpen
}