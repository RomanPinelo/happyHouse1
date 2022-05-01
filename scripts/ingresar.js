// Casilla otros de Amenidades del formulario
var checkOtro = document.getElementById("otros");
var especificaOtro = document.getElementById("otrosEspecifica");

// El elemento details
var amenidades_details = document.getElementById("amenidadesDetails");

// Formulario el cual se modificara su height
var formularioAltura = document.getElementById("formularioHeight");

amenidades_details.addEventListener('click', () => {
  formularioAltura.style.height = "auto";
});

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