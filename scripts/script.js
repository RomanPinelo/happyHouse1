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