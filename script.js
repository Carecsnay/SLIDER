const qs = el => document.querySelector(el);
const qsa = el => document.querySelectorAll(el);

let totalSliders = qsa('.slider--item').length;

qs('.slider--width').style.width = `calc(100vw * ${totalSliders})`;

//Variável de ambiente
let currentSlider = 0;

const changePrev = () => {
    currentSlider--;
    if (currentSlider < 0) {
        currentSlider = totalSliders - 1; //Ultimo slide (2)
    }
    qs('.slider--width').style.transform = `translateX(-${currentSlider}00vw)`
}

const changeNext = () => {
    currentSlider++;
    if (currentSlider > totalSliders - 1) {
        currentSlider = 0; // Primeiro slide (0)
    }
    qs('.slider--width').style.transform = `translateX(-${currentSlider}00vw)`

}