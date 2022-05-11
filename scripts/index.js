// Slider de proyectos y desarrollos en celular
// Variables y constantes
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1]; //Siempre obtengo la última imagen para ponerla al principio y se vea el efecto del slider

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast); //Coloca el último elemento al inicio del slider

// Funciones
function proyectosNextCel() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);  //El primer elemento se mueve al final
    slider.style.marginLeft = "-100%";
  }, 500);
}

function proyectosPrevCel() {
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

function proyectosNextPc() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-66.66%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);  //El primer elemento se mueve al final
    slider.style.marginLeft = "-33.33%";
  }, 500);
}

function proyectosPrevPc() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);  //El último elemento se mueve al inicio
    slider.style.marginLeft = "-33.33%";
  }, 500);
}

btnRight.addEventListener('click', function(){
  proyectosNextCel();
});

btnLeft.addEventListener('click', function(){
  proyectosPrevCel();
});

// Esto hace que sea automático y es opcional
setInterval(function() {
  proyectosNextCel();
}, 5000);


// Slider de proyectos y desarrollos en PC
if (screen.width > 1000) {
  btnRight.addEventListener('click', function(){
    proyectosNextPc();
  });
  
  btnLeft.addEventListener('click', function(){
    proyectosPrevPc();
  });
  
  // Esto hace que sea automático y es opcional
  setInterval(function() {
    proyectosNextPc();
  }, 5000);
}



// Slider socios estrategicos en celular