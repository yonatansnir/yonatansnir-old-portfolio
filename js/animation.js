const quote = document.getElementById('quote-animation');
const btn = document.getElementById('project-btn')
const text = 'The only thing that matters more than how it looks - is how it feels.';

function quoteAnimate(i){
    if (i === text.length){
        setTimeout(() => {
            btn.style.opacity = "1";
        }, 1000);
        return
    };
    if (i === 52){
        setTimeout(() => {
            quote.innerHTML += text[i];
            quoteAnimate(i+1)
        } ,2000)
        return
    }
    setTimeout(() => {
        if (i === 0){
            quote.innerHTML = text[i];
        } else {
            quote.innerHTML += text[i];
        }
        quoteAnimate(i+1);
    },50)
}

setTimeout(() => {
    quoteAnimate(0);
}, 3500);