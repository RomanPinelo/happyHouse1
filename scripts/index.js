// Variables y constantes de proyectos y desarrollos
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1]; //Siempre obtengo la última imagen para ponerla al principio y se vea el efecto del slider

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast); //Coloca el último elemento al inicio del slider
// Del slider, desde el inicio opaca las imagenes de los lados y la del centro la deja a todo color
if (screen.width > 768) {
  for (let i = 0; i < sliderSection.length; i++) {
    sliderSection[i].style.opacity = "0.5";
    if (i == 1) {
      sliderSection[i].style.opacity = "1";
    }
  }
}
// __________________________________________________________________________________________________________________
// Variables y constantes de socios
const slider1 = document.querySelector("#slider1");
let sliderSection1 = document.querySelectorAll(".slider__section1");
let sliderSectionLast1 = sliderSection1[sliderSection1.length - 1]; //Siempre obtengo la última imagen para ponerla al principio y se vea el efecto del slider

const btnLeft1 = document.querySelector("#btn-left1");
const btnRight1 = document.querySelector("#btn-right1");

slider1.insertAdjacentElement('afterbegin', sliderSectionLast1); //Coloca el último elemento al inicio del slider

// Funciones de proyectos y desarrollos en celular
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

// Funciones de proyectos y desarrollos en iPad y PC
function proyectosNextPc() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  let sliderSectionSecond = document.querySelectorAll(".slider__section");
  slider.style.marginLeft = "-66.66%";
  slider.style.transition = "all 0.5s";
  // Mantiene la imagen del centro a todo color y las de las orillas opacas
  for (let i = 0; i < sliderSectionSecond.length; i++) {
    sliderSectionSecond[i].style.opacity = "0.5";
    if (i == 3) {
      sliderSectionSecond[i].style.opacity = "1";
    }
  }
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
  // Mantiene la imagen del centro a todo color y las de las orillas opacas
  for (let i = 0; i < sliderSection.length; i++) {
    sliderSection[i].style.opacity = "0.5";
    if (i == 1) {
      sliderSection[i].style.opacity = "1";
    }
  }
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);  //El último elemento se mueve al inicio
    slider.style.marginLeft = "-33.33%";
  }, 500);
}

// Funciones de socios en celular
function sociosNextCel() {
  let sliderSectionFirst1 = document.querySelectorAll(".slider__section1")[0];
  slider1.style.marginLeft = "-100%";
  slider1.style.transition = "all 0.5s";
  setTimeout(function(){
    slider1.style.transition = "none";
    slider1.insertAdjacentElement('beforeend', sliderSectionFirst1);  //El primer elemento se mueve al final
    slider1.style.marginLeft = "-50%";
  }, 500);
}

function sociosPrevCel() {
  let sliderSection1 = document.querySelectorAll(".slider__section1");
  let sliderSectionLast1 = sliderSection1[sliderSection1.length - 1];
  slider1.style.marginLeft = "0";
  slider1.style.transition = "all 0.5s";
  setTimeout(function(){
    slider1.style.transition = "none";
    slider1.insertAdjacentElement('afterbegin', sliderSectionLast1);  //El último elemento se mueve al inicio
    slider1.style.marginLeft = "-50%";
  }, 500);
}

// Funciones de socios en iPad y PC
function sociosNextPc() {
  let sliderSectionFirst1 = document.querySelectorAll(".slider__section1")[0];
  slider1.style.marginLeft = "-50%";
  slider1.style.transition = "all 0.5s";
  setTimeout(function(){
    slider1.style.transition = "none";
    slider1.insertAdjacentElement('beforeend', sliderSectionFirst1);  //El primer elemento se mueve al final
    slider1.style.marginLeft = "-25%";
  }, 500);
}

function sociosPrevPc() {
  let sliderSection1 = document.querySelectorAll(".slider__section1");
  let sliderSectionLast1 = sliderSection1[sliderSection1.length - 1];
  slider1.style.marginLeft = "0";
  slider1.style.transition = "all 0.5s";
  setTimeout(function(){
    slider1.style.transition = "none";
    slider1.insertAdjacentElement('afterbegin', sliderSectionLast1);  //El último elemento se mueve al inicio
    slider1.style.marginLeft = "-25%";
  }, 500);
}

// Slider de proyectos y desarrollos en celular
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


// Slider de proyectos y desarrollos en iPad y PC
if (screen.width > 768) {
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

// Slider de socios en celular
btnRight1.addEventListener('click', function(){
  sociosNextCel();
});

btnLeft1.addEventListener('click', function(){
  sociosPrevCel();
});

// Esto hace que sea automático y es opcional
setInterval(function() {
  sociosNextCel();
}, 5000);

// Slider de socios en iPad y PC
if (screen.width > 768) {
  btnRight1.addEventListener('click', function(){
    sociosNextPc();
  });
  
  btnLeft1.addEventListener('click', function(){
    sociosPrevPc();
  });
  
  // Esto hace que sea automático y es opcional
  setInterval(function() {
    sociosNextPc();
  }, 5000);
}