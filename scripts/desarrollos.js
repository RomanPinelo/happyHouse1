// Variables y constantes de slider en celular del desarrollo
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1]; //Siempre obtengo la última imagen para ponerla al principio y se vea el efecto del slider

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast); //Coloca el último elemento al inicio del slider

// Variables y constantes de slider de planos o información
const slider1 = document.querySelector("#slider1");
let sliderSection1 = document.querySelectorAll(".slider__section1");
let sliderSectionLast1 = sliderSection1[sliderSection1.length - 1]; //Siempre obtengo la última imagen para ponerla al principio y se vea el efecto del slider

const btnLeft1 = document.querySelector("#btn-left1");
const btnRight1 = document.querySelector("#btn-right1");

slider1.insertAdjacentElement('afterbegin', sliderSectionLast1); //Coloca el último elemento al inicio del slider

// Funciones de slider de imagenes de desarrollo en celular
function NextCel() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);  //El primer elemento se mueve al final
    slider.style.marginLeft = "-100%";
  }, 500);
}

function PrevCel() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);  //El último elemento se mueve al inicio
    slider.style.marginLeft = "-100%";
  }, 500);
}

// Funciones de slider de planos o información
function nextPlano() {
  let sliderSectionFirst1 = document.querySelectorAll(".slider__section1")[0];
  slider1.style.marginLeft = "-200%";
  slider1.style.transition = "all 0.5s";
  setTimeout(function(){
    slider1.style.transition = "none";
    slider1.insertAdjacentElement('beforeend', sliderSectionFirst1);  //El primer elemento se mueve al final
    slider1.style.marginLeft = "-100%";
  }, 500);
}

function prevPlano() {
  let sliderSection1 = document.querySelectorAll(".slider__section1");
  let sliderSectionLast1 = sliderSection1[sliderSection1.length - 1];
  slider1.style.marginLeft = "0";
  slider1.style.transition = "all 0.5s";
  setTimeout(function(){
    slider1.style.transition = "none";
    slider1.insertAdjacentElement('afterbegin', sliderSectionLast1);  //El último elemento se mueve al inicio
    slider1.style.marginLeft = "-100%";
  }, 500);
}

// Slider del desarrollo en celular
btnRight.addEventListener('click', function(){
  NextCel();
});

btnLeft.addEventListener('click', function(){
  PrevCel();
});

// Esto hace que sea automático y es opcional
setInterval(function() {
  NextCel();
}, 5000);

// Slider de planos o información
btnRight1.addEventListener('click', function(){
  nextPlano();
});

btnLeft1.addEventListener('click', function(){
  prevPlano();
});

// Esto hace que sea automático y es opcional
setInterval(function() {
  nextPlano();
}, 8000);