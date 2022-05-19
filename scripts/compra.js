// Variable del select del estado
var selectEstado = document.getElementById("estado");

// Variables del indicador de páginas
var paginasView = document.getElementById("paginas");
var buttonPageLeft = document.getElementById("btnPage_left");
var buttonPageRight = document.getElementById("btnPage_right");
var pageXOfY = document.getElementById("paginaxdey");
var page = 1;
var margin_Left = 0;

pageXOfY.innerHTML = page;

// Función para cambiar el ancho del select, de acuerdo a la opción seleccionada.
function anchoSelect() { 
  let opcionSelect = selectEstado.value;
  if (opcionSelect == "CDMX") {
    selectEstado.style.width = "4.1rem";
  }
  if (opcionSelect == "Estado de México") {
    selectEstado.style.width = "8.5rem";
  }
  if (opcionSelect == "Puebla") {
    selectEstado.style.width = "4.25rem";
  }
  if (opcionSelect == "Querétaro") {
    selectEstado.style.width = "5.4rem";
  }
  if (opcionSelect == "Yucatán") {
    selectEstado.style.width = "4.5rem";
  }
}

setInterval(() => {
  anchoSelect();
}, 50);

// Funciones del indicador de páginas
buttonPageLeft.addEventListener('click', function(){
  page -= 1;
  pageXOfY.innerHTML = page;
  margin_Left += 100;
  paginasView.style.marginLeft = `${margin_Left}%`;
  if (page < 1) {
    page = 1;
    pageXOfY.innerHTML = page;
    margin_Left -= 100;
    paginasView.style.marginLeft = `${margin_Left}%`;
  }
});

buttonPageRight.addEventListener('click', function(){
  page += 1;
  pageXOfY.innerHTML = page;
  margin_Left -= 100;
  paginasView.style.marginLeft = `${margin_Left}%`;
  if (page > 2) {
    page = 2;
    pageXOfY.innerHTML = page;
    margin_Left += 100;
    paginasView.style.marginLeft = `${margin_Left}%`;
  }
});