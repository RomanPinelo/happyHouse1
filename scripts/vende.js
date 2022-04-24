// Botones del formulario
var formulario = document.getElementById("formularioUl");
var atrasButton = document.getElementById("atras");
var continuarButton = document.getElementById("continuar");
var enviarButton = document.getElementById("enviar");
var margin_Left = 0;

// Indicadores
var indicador1 = document.getElementById("indicadorSeccion1");
var indicador2 = document.getElementById("indicadorSeccion2");
var indicador3 = document.getElementById("indicadorSeccion3");
var indicador4 = document.getElementById("indicadorSeccion4");

// Al estar en los pasos 2, 3 y 4 en el formulario, la sección pasos desaparece
var seccionPasos = document.getElementById("pasos");

// Los elementos details que se cerrarán al preionar continuar
var amenidades_details = document.getElementById("amenidadesDetails");
var adicionales_details = document.getElementById("adicionalesDetails");

// Casilla otros de Amenidades del formulario
var checkOtro = document.getElementById("otros");
var especificaOtro = document.getElementById("otrosEspecifica");

// Inicia algunas variables
indicador1.style.width = "25%";
indicador2.style.width = "0";
indicador3.style.width = "0";
indicador4.style.width = "0";

atrasButton.style.display = "none";
enviarButton.style.display = "none";

// Funciones de los botones
continuarButton.addEventListener('click', () => {
  margin_Left -= 100;
  formulario.style.marginLeft = `${margin_Left}%`;
  if (margin_Left < 0) {
    atrasButton.style.display = "block";
    seccionPasos.style.display = "none";
  }
  if (margin_Left == -100) {
    indicador2.style.width = "25%";
  }
  if (margin_Left == -200) {
    indicador3.style.width = "25%";
    adicionales_details.removeAttribute("open"); // Cierra el elemento details
  }
  if (margin_Left == -300) {
    amenidades_details.removeAttribute("open");
    continuarButton.style.display = "none";
    enviarButton.style.display = "block";
    indicador4.style.width = "25%";
  }
});

atrasButton.addEventListener('click', () => {
  margin_Left += 100;
  formulario.style.marginLeft = `${margin_Left}%`;
  if (margin_Left == 0) {
    atrasButton.style.display = "none";
    indicador2.style.width = "0";
    seccionPasos.style.display = "block";
  }
  if (margin_Left < 0) {
    atrasButton.style.display = "block"
  }
  if (margin_Left == -100) {
    indicador3.style.width = "0";
  }
  if (margin_Left == -200) {
    indicador4.style.width = "0";
    continuarButton.style.display = "block";
    enviarButton.style.display = "none";
  }
});

// Botón contacto que oculta el menú en vista celular
var headerContactoButton = document.getElementById("headerContacto");

headerContactoButton.addEventListener('click', () => {
  bar1.classList.toggle("active1");
  bar3.classList.toggle("active3");
  headerMenu.classList.toggle("active");
});

//variables globales para definir el separador de millares y decimales
//Para coma millares y punto en decimales (USA)
const MILLARES=",";
const DECIMALES=".";
const DTFLOCAL = new Intl.NumberFormat('en-US');

// Formatear numeros decimales indistintamente tanto positivos como negativos
function numberFormatIndistinto(e) {
    if (this.value === "") {
        return;
    }
    // Obtenemos un array con el numero y los decimales si hay
    let caracterInicial = this.value.substring(0, 1);
    let contenido="";
    if (MILLARES===","){
        contenido = (caracterInicial === "-") ? this.value.substring(1, this.value.length).replace(/[^0-9\.]/g, "").split(".") : this.value.replace(/[^0-9\.]/g, "").split(".");
    }else{
        contenido = (caracterInicial === "-") ? this.value.substring(1, this.value.length).replace(/[^0-9\,]/g, "").split(",") : this.value.replace(/[^0-9\,]/g, "").split(",");
    }
    // añadimos los separadores de miles al primer numero del array
    contenido[0] = contenido[0].length ? DTFLOCAL.format(parseInt(contenido[0])) : "0";
    // Juntamos el numero con los decimales si hay decimales
    this.value = contenido.length > 1 ? contenido.slice(0, 2).join(".") : contenido[0];
    if (caracterInicial === "-") {
        this.value = caracterInicial + this.value;
    }
    //damos color rojo si numero negativo
    this.className = (this.value.substring(0, 1) !== "-") ? "numberIndistinto positivos" : "numberIndistinto negativos";
}


window.onload = function() {
    document.querySelectorAll(".numberIndistinto").forEach(el => el.addEventListener("keyup", numberFormatIndistinto));
    
};

// Función para aparecer y desaparecer los input númericos en caso de checkear un input anterior
// en la sección dos del formulario de venta
function checkInputOtro() {
  setInterval(() => {
    especificaOtro.style.display = "none";
    if (checkOtro.checked) {
      especificaOtro.style.display = "block";
    }
  }, 250);
}

checkInputOtro();