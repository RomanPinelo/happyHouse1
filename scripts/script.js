// Botón 9 Flecha | En vista de celular
var menuButton = document.getElementById("buttonMenu");

var bar1 = document.getElementById("bar1");
var bar3 = document.getElementById("bar3");

//Menú en vista de celular
var  headerMenu = document.getElementById("headerMenu");

menuButton.addEventListener('click', () => {
  bar1.classList.toggle("active1");
  bar3.classList.toggle("active3");
  headerMenu.classList.toggle("active");
});

// Botón contacto que oculta el menú en vista celular
var headerContactoButton = document.getElementById("headerContacto");

headerContactoButton.addEventListener('click', () => {
  bar1.classList.toggle("active1");
  bar3.classList.toggle("active3");
  headerMenu.classList.toggle("active");
});

// Toma el año actual
// Obtengo la fecha para ponerla en el footer
var footerYear = document.getElementById("anioActual");
var fecha = new Date();

footerYear.innerHTML = fecha.getFullYear();