// Variable del select del estado
var selectEstado = document.getElementById("estado");

// Variable que manejas las páginas que muestran las tarjetas
var cardsPages = document.querySelectorAll(".paginasCards");

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



// ------------------------------------------------- Funciones para pintar las tarjetas ----------------------------------------------
// Función pintarDatos
function pintarDatos(datos)  {
  let contadorPropiedades = 0;
  let numCardsLastPage;
  console.log(datos.length);
  // Borra todo lo que haya en las propiedades
  for (let i = 0; i < cardsPages.length; i++) {
    cardsPages[i].innerHTML = "";
  }
  for (const item of datos) {
    if (contadorPropiedades < 12) {
      if (item.tipo != "Desarrollo") {
        cardsPages[0].innerHTML += `
          <a href="#" class="cardInfo">
            <div class="cardInfo__carousel">
              <div class="cardInfo__caruosel-carousel">
                <img src="${item.imagen1}" alt="Imagen">
              </div>
              <div class="cardInfo__caruosel-text">
                <span>${item.tipo}</span>
                <span>${item.estado}</span>
              </div>
            </div>
            <div class="cardInfo__info">
              <div class="precioLogos">
                <p class="precioLogos__precio">$${item.precio.millones}${item.precio.miles}${item.precio.centenas}.00 <span>MXN</span></p>
                <p class="precioLogos___logos">
                  <i class="fa fa-bed" aria-hidden="true"></i> <span id="habitaciones">${item.recamaras}</span>
                  <i class="fa fa-bath" aria-hidden="true"></i> <span id="banos">${item.banos}</span>
                </p>
              </div>
              <div class="direccionLogos">
                <p class="direccionLogos__direccion">${item.direccion.delegacionMunicipio}, ${item.direccion.colonia}</p>
                <p class="direccionLogos__logos">
                  <i class="fa fa-car" aria-hidden="true"></i> <span id="estacionamiento">${item.estacionamiento}</span>
                  <i class="fa fa-arrows-alt" aria-hidden="true"></i> <span id="superficie">${item.superficie}</span> m<sup>2</sup>
                </p>
              </div>
            </div>
          </a> <!-- cardInfo a -->
        `
      } else {
        cardsPages[0].innerHTML += `
          <a href="#" class="cardInfo">
            <div class="cardInfo__carousel">
              <div class="cardInfo__caruosel-carousel">
                <img src="${item.imagen1}" alt="Imagen">
              </div>
              <div class="cardInfo__caruosel-text">
                <span>${item.nombre}</span>
                <span>${item.estado}</span>
              </div>
            </div>
            <div class="cardInfo__info">
              <div class="precioLogos">
                <p class="precioLogos__precio">$${item.precioMinimo.millones}${item.precioMinimo.miles}${item.precioMinimo.centenas}.00 <span>MXN</span></p>
                <p class="precioLogos___logos">
                  <i class="fa fa-bed" aria-hidden="true"></i> <span id="habitaciones">${item.recamaras}</span>
                  <i class="fa fa-bath" aria-hidden="true"></i> <span id="banos">${item.banos}</span>
                </p>
              </div>
              <div class="direccionLogos">
                <p class="direccionLogos__direccion">${item.direccion.delegacionMunicipio}, ${item.direccion.colonia}</p>
                <p class="direccionLogos__logos">
                  <i class="fa fa-car" aria-hidden="true"></i> <span id="estacionamiento">${item.estacionamiento}</span>
                  <i class="fa fa-arrows-alt" aria-hidden="true"></i> <span id="superficie">${item.superficie}</span> m<sup>2</sup>
                </p>
              </div>
            </div>
          </a> <!-- cardInfo a -->
        `
      }
    }
    if (contadorPropiedades >= 12 && contadorPropiedades < 24) {
      if (item.tipo != "Desarrollo") {
        cardsPages[1].innerHTML += `
          <a href="#" class="cardInfo">
            <div class="cardInfo__carousel">
              <div class="cardInfo__caruosel-carousel">
                <img src="${item.imagen1}" alt="Imagen">
              </div>
              <div class="cardInfo__caruosel-text">
                <span>${item.tipo}</span>
                <span>${item.estado}</span>
              </div>
            </div>
            <div class="cardInfo__info">
              <div class="precioLogos">
                <p class="precioLogos__precio">$${item.precio.millones}${item.precio.miles}${item.precio.centenas}.00 <span>MXN</span></p>
                <p class="precioLogos___logos">
                  <i class="fa fa-bed" aria-hidden="true"></i> <span id="habitaciones">${item.recamaras}</span>
                  <i class="fa fa-bath" aria-hidden="true"></i> <span id="banos">${item.banos}</span>
                </p>
              </div>
              <div class="direccionLogos">
                <p class="direccionLogos__direccion">${item.direccion.delegacionMunicipio}, ${item.direccion.colonia}</p>
                <p class="direccionLogos__logos">
                  <i class="fa fa-car" aria-hidden="true"></i> <span id="estacionamiento">${item.estacionamiento}</span>
                  <i class="fa fa-arrows-alt" aria-hidden="true"></i> <span id="superficie">${item.superficie}</span> m<sup>2</sup>
                </p>
              </div>
            </div>
          </a> <!-- cardInfo a -->
        `
      } else {
        cardsPages[1].innerHTML += `
          <a href="#" class="cardInfo">
            <div class="cardInfo__carousel">
              <div class="cardInfo__caruosel-carousel">
                <img src="${item.imagen1}" alt="Imagen">
              </div>
              <div class="cardInfo__caruosel-text">
                <span>${item.nombre}</span>
                <span>${item.estado}</span>
              </div>
            </div>
            <div class="cardInfo__info">
              <div class="precioLogos">
                <p class="precioLogos__precio">$${item.precioMinimo.millones}${item.precioMinimo.miles}${item.precioMinimo.centenas}.00 <span>MXN</span></p>
                <p class="precioLogos___logos">
                  <i class="fa fa-bed" aria-hidden="true"></i> <span id="habitaciones">${item.recamaras}</span>
                  <i class="fa fa-bath" aria-hidden="true"></i> <span id="banos">${item.banos}</span>
                </p>
              </div>
              <div class="direccionLogos">
                <p class="direccionLogos__direccion">${item.direccion.delegacionMunicipio}, ${item.direccion.colonia}</p>
                <p class="direccionLogos__logos">
                  <i class="fa fa-car" aria-hidden="true"></i> <span id="estacionamiento">${item.estacionamiento}</span>
                  <i class="fa fa-arrows-alt" aria-hidden="true"></i> <span id="superficie">${item.superficie}</span> m<sup>2</sup>
                </p>
              </div>
            </div>
          </a> <!-- cardInfo a -->
        `
      }
    }
    contadorPropiedades++;
  }
}



// ------------------------------------------------- Eventos sobre las tarjetas ----------------------------------------------
//Termina de cargar el contenido y pinta todas las propiedades
document.addEventListener("DOMContentLoaded", () => {
  //Manejo del archivo json
  fetch('../propiedades.json')
    .then(res => res.json())
      .then(datos => {
        pintarDatos(datos); //Función para tratar los datos
    })
});