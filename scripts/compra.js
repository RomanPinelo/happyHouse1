// -------------------------------------------------- Variables --------------------------------------------------------------
// Variable del select del estado y número de propiedades
var selectEstado = document.getElementById("estado");
var numPropiedadBus = document.getElementById("numeroPropiedades");

// Variable que manejas las páginas que muestran las tarjetas
var cardsPages = document.querySelectorAll(".paginasCards");

// Variables del cuadro de búsqueda
var botonBusqueda = document.getElementById("buscarBtn");
var filtroAlcaldiaMunicipio = document.getElementById("alcaldiaMunicipio");
var filtroTipo = document.getElementById("tipo_propiedad");
var filtroHab = document.getElementById("habitaciones_propiedad");
var filtroBanos = document.getElementById("banos_propiedad");
var filtroEstacionamiento = document.getElementById("estacionamiento_propiedad");
var filtroAdicionales = document.getElementById("adicionales_propiedad");

// Variables del los botones del menpu de estados
var todos = document.getElementById("todosEstados");
var cdmx = document.getElementById("cdmxEstado");
var edomex = document.getElementById("edoMexEstado");
var puebla = document.getElementById("pueblaEstado");
var queretaro = document.getElementById("queretaroEstado");
var yucatan = document.getElementById("yucatanEstado");

// Variables del indicador de páginas
var paginasView = document.getElementById("paginas");
var buttonPageLeft = document.getElementById("btnPage_left");
var buttonPageRight = document.getElementById("btnPage_right");
var pageXOfY = document.getElementById("paginaxdey");
var page = 1;
var margin_Left = 0;

pageXOfY.innerHTML = page;

// -------------------------------------------------- Funciones --------------------------------------------------------------
// Función para cambiar el ancho del select, de acuerdo a la opción seleccionada y mostrar
// número de propiedades
function pintarNumPropiedades(datos, nombre) {
  let numeroPropiedad = [];
  for (const item of datos) {
    if (item.direccion.estado == nombre) {
      numeroPropiedad.push(item);
    }
  }
  numPropiedadBus.innerHTML = numeroPropiedad.length;
}

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
  //Manejo del archivo json
  fetch('../propiedades.json')
    .then(res => res.json())
      .then(datos => {
        pintarNumPropiedades(datos, opcionSelect); //Función para tratar los datos
    })
}

setInterval(() => {
  anchoSelect();
}, 50);

// Funciones para pintar las tarjetas
// Función pintarDatos
function pintarDatos(datos)  {
  let contadorPropiedades = 0;
  // Borra todo lo que haya en las propiedades
  for (let i = 0; i < cardsPages.length; i++) {
    cardsPages[i].innerHTML = "";
  }
  for (const item of datos) {
    if (contadorPropiedades < 12) {
      if (item.tipo != "Desarrollo") {
        cardsPages[0].innerHTML += `
          <a href="${item.descripcion}" class="cardInfo">
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
        if ((item.nombre == "Hacienda San Eduardo") || (item.nombre == "San Roque") || (item.nombre == "Ciudad Deportiva")) {
          cardsPages[0].innerHTML += `
            <a href="${item.descripcion}" class="cardInfo">
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
                  <p class="precioLogos__precio"><span>Desde</span> $${item.precioMinimo.millones}${item.precioMinimo.miles}${item.precioMinimo.centenas}.00 <span>MXN por m<sup>2</sup></span></p>
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
            <a href="${item.descripcion}" class="cardInfo">
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
    }
    if (contadorPropiedades >= 12 && contadorPropiedades < 24) {
      if (item.tipo != "Desarrollo") {
        cardsPages[1].innerHTML += `
          <a href="${item.descripcion}" class="cardInfo">
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
        if ((item.nombre == "Hacienda San Eduardo") || (item.nombre == "San Roque") || (item.nombre == "Ciudad Deportiva")) {
          cardsPages[1].innerHTML += `
            <a href="${item.descripcion}" class="cardInfo">
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
                  <p class="precioLogos__precio"><span>Desde</span> $${item.precioMinimo.millones}${item.precioMinimo.miles}${item.precioMinimo.centenas}.00 <span>MXN por m<sup>2</sup></span></p>
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
            <a href="${item.descripcion}" class="cardInfo">
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
    }
    contadorPropiedades++;
  }
}

// Función para mostrar el mensaje Sin Resultados
function sinResultados() {
  // Borra todo lo que haya en las propiedades
  for (let i = 0; i < cardsPages.length; i++) {
    cardsPages[i].innerHTML = "";
  }
  setTimeout(() => {
    cardsPages[0].innerHTML = `
      <div class="noResultados">
        <p>No se encontraron resultados</p>
      </div>
    `;
  }, 250);
}

// Función para filtrar los datos
function pintarDatos1(datos, estado) {
  let filtroEstado = [];
  for (const item of datos) {
    if (item.direccion.estado == estado) {
      filtroEstado.push(item);
    }
  }
  if (filtroEstado.length != 0) {
    pintarDatos(filtroEstado);
  } else {
    sinResultados();
  }
}

// Función para ir a la primer página
function primerPagina() {
  page = 1;
  pageXOfY.innerHTML = page;
  margin_Left = 0;
  paginasView.style.marginLeft = `${margin_Left}%`;
  window.scrollTo(0, 450);
}

// Función para filtrar datos de búsqueda
function filtrarDatos(datos, opcionSel) {
  let filtroEstado = [];
  for (let item of datos) {
    if (item.direccion.estado == opcionSel) {
      filtroEstado.push(item);
    }
  }

  if (filtroEstado.length != 0) {
    let filtroAlcalMuni = [];
    let AlcaldiaMunicipioInput = filtroAlcaldiaMunicipio.value;
    AlcaldiaMunicipioInput = AlcaldiaMunicipioInput.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Quita los acentos
    AlcaldiaMunicipioInput = AlcaldiaMunicipioInput.replace(/[@.,\/#!$%\^&\*;:{}[\]=\-_`~()]/g,""); // Quita los signos de puntuación
    //AlcaldiaMunicipioInput = AlcaldiaMunicipioInput.replace(/[,\.]/g, ""); // Quita los puntos y comas
    AlcaldiaMunicipioInput = AlcaldiaMunicipioInput.toLowerCase(); // Convierte todo a minúscula
    AlcaldiaMunicipioInput = AlcaldiaMunicipioInput.replace(/\s+/g, '');  // Quita espacios en blanco

    for (let item of filtroEstado) {
      let AlcaldiaMunicipioObjeto = item.direccion.delegacionMunicipio;
      AlcaldiaMunicipioObjeto = AlcaldiaMunicipioObjeto.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Quita los acentos
      AlcaldiaMunicipioObjeto = AlcaldiaMunicipioObjeto.replace(/[@.,\/#!$%\^&\*;:{}[\]=\-_`~()]/g,""); // Quita los signos de puntuación
      // AlcaldiaMunicipioObjeto = AlcaldiaMunicipioObjeto.replace(/[,\.]/g, ""); // Quita los puntos y comas
      AlcaldiaMunicipioObjeto = AlcaldiaMunicipioObjeto.toLowerCase(); // Convierte todo a minúsculas
      AlcaldiaMunicipioObjeto = AlcaldiaMunicipioObjeto.replace(/\s+/g, '');  // Quita espacios en blanco
      if (AlcaldiaMunicipioInput == AlcaldiaMunicipioObjeto) {
        filtroAlcalMuni.push(item);
      }
    }

    if (filtroAlcalMuni.length != 0) {
      filtroAlcaldiaMunicipio.value = "";
      let filtroTipoPropiedad = [];
      let tipoPropi = filtroTipo.value;
      for (let item of filtroAlcalMuni) {
        if (item.tipo == tipoPropi) {
          filtroTipoPropiedad.push(item);
        }
      }

      if (filtroTipoPropiedad.length != 0) {
        let filtroHabitaciones = [];
        let valorFiltroHab = filtroHab.value;
        for (let item of filtroTipoPropiedad) {
          if (item.recamaras == valorFiltroHab) {
            filtroHabitaciones.push(item);
          }
        }

        if (filtroHabitaciones.length != 0) {
          let filtroBanosObjeto = [];
          let valorFiltroBanos = filtroBanos.value;
          for (let item of filtroHabitaciones) {
            if (item.banos == valorFiltroBanos) {
              filtroBanosObjeto.push(item);
            }
          }

          if (filtroBanosObjeto.length != 0) {
            let filtroEsta = [];
            let valorFiltroEsta = filtroEstacionamiento.value;
            for (let item of filtroBanosObjeto) {
              if (item.estacionamiento == valorFiltroEsta) {
                filtroEsta.push(item);
              }
            }

            if (filtroEsta.length != 0) {
              let filtroAdicionalesObjeto = [];
              let valorFiltroAdicionales = filtroAdicionales.value;
              for (let item of filtroEsta) {
                if (item.adicionales.adicional_1 == valorFiltroAdicionales) {
                  filtroAdicionalesObjeto.push(item);
                }
              }
              if (filtroAdicionalesObjeto.length == 0) {
                for (let item of filtroEsta) {
                  if (item.adicionales.adicional_2 == valorFiltroAdicionales) {
                    filtroAdicionalesObjeto.push(item);
                  }
                }
              }
              if (filtroAdicionalesObjeto.length == 0) {
                for (let item of filtroEsta) {
                  if (item.adicionales.adicional_3 == valorFiltroAdicionales) {
                    filtroAdicionalesObjeto.push(item);
                  }
                }
              }
              if (filtroAdicionalesObjeto.length == 0) {
                for (let item of filtroEsta) {
                  if (item.adicionales.adicional_4 == valorFiltroAdicionales) {
                    filtroAdicionalesObjeto.push(item);
                  }
                }
              }
              if (filtroAdicionalesObjeto.length == 0) {
                for (let item of filtroEsta) {
                  if (item.adicionales.adicional_5 == valorFiltroAdicionales) {
                    filtroAdicionalesObjeto.push(item);
                  }
                }
              }
              if (filtroAdicionalesObjeto.length == 0) {
                for (let item of filtroEsta) {
                  if (item.adicionales.adicional_6 == valorFiltroAdicionales) {
                    filtroAdicionalesObjeto.push(item);
                  }
                }
              }
              if (filtroAdicionalesObjeto.length == 0) {
                for (let item of filtroEsta) {
                  if (item.adicionales.adicional_7 == valorFiltroAdicionales) {
                    filtroAdicionalesObjeto.push(item);
                  }
                }
              }
              if (filtroAdicionalesObjeto.length != 0) {
                pintarDatos(filtroAdicionalesObjeto);
              } else {
                sinResultados();
              }
            } else {
              sinResultados();
            }
          } else {
            sinResultados();
          }
        } else {
          sinResultados();
        }
      } else {
        sinResultados();
      }
    } else {
      sinResultados();
    }

  } else {
    sinResultados();
  }
}


// ------------------------------------------------- Eventos sobre las tarjetas ----------------------------------------------
// Funciones del indicador de páginas
buttonPageLeft.addEventListener('click', function(){
  page -= 1;
  pageXOfY.innerHTML = page;
  margin_Left += 100;
  paginasView.style.marginLeft = `${margin_Left}%`;
  setTimeout(() => {
    window.scrollTo(0, 450);
  }, 400);
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
  setTimeout(() => {
    window.scrollTo(0, 450);
  }, 400);
  if (page > 2) {
    page = 2;
    pageXOfY.innerHTML = page;
    margin_Left += 100;
    paginasView.style.marginLeft = `${margin_Left}%`;
  }
});

//Termina de cargar el contenido y pinta todas las propiedades
document.addEventListener("DOMContentLoaded", () => {
  //Manejo del archivo json
  fetch('../propiedades.json')
    .then(res => res.json())
      .then(datos => {
        pintarDatos(datos); //Función para tratar los datos
    })
});

// Eventos de los botones del menú de estados
todos.addEventListener('click', function(){
  location.reload();
});

cdmx.addEventListener('click', function(){
  primerPagina();
  let estado = "CDMX";
  //Manejo del archivo json
  fetch('../propiedades.json')
    .then(res => res.json())
      .then(datos => {
        pintarDatos1(datos, estado); //Función para tratar los datos
      })
});

edomex.addEventListener('click', function(){
  primerPagina();
  let estado = "Estado de México";
  //Manejo del archivo json
  fetch('../propiedades.json')
    .then(res => res.json())
      .then(datos => {
        pintarDatos1(datos, estado); //Función para tratar los datos
      })
});

puebla.addEventListener('click', function(){
  primerPagina();
  let estado = "Puebla";
  //Manejo del archivo json
  fetch('../propiedades.json')
    .then(res => res.json())
      .then(datos => {
        pintarDatos1(datos, estado); //Función para tratar los datos
      })
});

queretaro.addEventListener('click', function(){
  primerPagina();
  let estado = "Querétaro";
  //Manejo del archivo json
  fetch('../propiedades.json')
    .then(res => res.json())
      .then(datos => {
        pintarDatos1(datos, estado); //Función para tratar los datos
      })
});

yucatan.addEventListener('click', function(){
  primerPagina();
  let estado = "Yucatán";
  //Manejo del archivo json
  fetch('../propiedades.json')
    .then(res => res.json())
      .then(datos => {
        pintarDatos1(datos, estado); //Función para tratar los datos
      })
});

// Presionar el botón de búsqueda
botonBusqueda.addEventListener('click', function(){
  primerPagina();
  let opcionSelect = selectEstado.value;
  //Manejo del archivo json
  fetch('../propiedades.json')
    .then(res => res.json())
      .then(datos => {
        filtrarDatos(datos, opcionSelect); //Función para tratar los datos
      })
});