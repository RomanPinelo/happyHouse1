<?php 

  // Se establece la dirección de a quien va dirigido el mensaje y asunto del correo.
  $destinatario = "l.espi1213@gmail.com"; //Al final cambiar a contacto@happyhousemx.com

  // Variables del formulario
  $estadoPro = $_POST['estado'];
  $muniAlcalPro = $_POST['muniAlcal'];
  $coloniaPro = $_POST['colonia'];
  $callePro = $_POST['calle'];
  $numExtPro = $_POST['numExt'];
  $numIntPro = $_POST['numInt'];

  $tipoPro = $_POST['tipoPropiedad'];
  $supHabitablePro = $_POST['supHabitable'];
  $habitacionesPro = $_POST['habitaciones'];
  $banosPro = $_POST['banos'];
  $estacionamientoPro = $_POST['estacionamiento'];
  $tipoEstacionamientoPro = $_POST['tipoEstacionamiento'];
  $balconPro = $_POST['balcon'];
  $patioPro = $_POST['patio'];
  $bodegaPro = $_POST['bodega'];
  $cuartoServicioPro = $_POST['cuartoServicio'];
  $jaulaTendidoPro = $_POST['jaulaTendido'];

  $edadEdifPro = $_POST['edadEdif'];
  $pisosEdifPro = $_POST['pisosEdif'];
  $pisoPropiPro = $_POST['pisoPropi'];
  $orientacionPro = $_POST['orientacion'];
  $elevadorPro = $_POST['elevador'];
  $seguridadPro = $_POST['seguridad'];
  $gimnasioPro = $_POST['gimnasio'];
  $albercaPro = $_POST['alberca'];
  $roofGardenPro = $_POST['roofGarden'];
  $otrosPro = $_POST['otros'];
  $otrosEspecificaPro = $_POST['otrosEspecifica'];
  $cuotaMantenimientoPro = $_POST['cuotaMantenimiento'];

  $dineroRecibido = $_POST['recibirDinero'];
  $relacionPro = $_POST['relacion'];
  $contactoNombre = $_POST['nombreCompleto'];
  $contactoTelefono = $_POST['telefono'];
  $contactoEmail = $_POST['correo'];
  $conocerPro = $_POST['conocer'];
  $contactoPolPrivacidad = $_POST['politicaPrivacidad'];

  // Header
  $header = 'From: ' . $contactoEmail . "\r\n";
  $header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
  $header .= "Mime-Version: 1.0 \r\n";
  $header .= "Content-Type: text/plain";

  // Asunto
  $contactoAsunto = "Quiero vender";

  // Se construye el mensaje con los datos enviados
  $mensaje = "Este mensaje fue enviado por: " . $contactoNombre . "\r\n";
  $mensaje .= "Sus datos son:" . "\r\n";
  $mensaje .= "Correo: " .  $contactoEmail . "\r\n";
  $mensaje .= "Teléfono: " . $contactoTelefono . "\r\n";
  $mensaje .=  "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "La dirección de la propiedad es: " . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Estado: " . $estadoPro . "." . "\r\n";
  $mensaje .= "Municipio o alcadía: " . $muniAlcalPro . "." . "\r\n";
  $mensaje .= "Colonia: " . $coloniaPro . "." . "\r\n";
  $mensaje .= "Calle: " . $callePro . "." . "\r\n";
  $mensaje .= "No. exterior: " . $numExtPro . "\r\n";
  $mensaje .= "No. interior: " . $numIntPro . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Sobre su propiedad" . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Es: " . $tipoPro . "." . "\r\n";
  $mensaje .= "La superficie habitable es: " . $supHabitablePro . " m2." . "\r\n";
  $mensaje .= "Tiene: " . $habitacionesPro . " habitaciones." . "\r\n";
  $mensaje .= "Tiene: " . $banosPro . " baños." . "\r\n";
  $mensaje .= "Tiene: " . $estacionamientoPro . " estacionamientos." . "\r\n";
  $mensaje .= "El tipo de estacionamiento es: " . $tipoEstacionamientoPro . "." . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Sus adicionales son:" . "\r\n";
  $mensaje .= "\r\n";
  if (!empty($balconPro)) {
    $mensaje .= "* Balcón/Terraza." . "\r\n";
  }
  if (!empty($patioPro)) {
    $mensaje .= "* Patio/Jardín." . "\r\n";
  }
  if (!empty($bodegaPro)) {
    $mensaje .= "* Bodega." . "\r\n";
  }
  if (!empty($cuartoServicioPro)) {
    $mensaje .= "* Cuarto de servicio." . "\r\n";
  }
  if (!empty($jaulaTendidoPro)) {
    $mensaje .= "* Jaula de tendido." . "\r\n";
  }
  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "\r\n";

  $mensaje .= "Si es edificio" . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "La edad del edificio es: " . $edadEdifPro. " años." . "\r\n";
  $mensaje .= "El total de pisos del edificio son: " . $pisosEdifPro. " pisos." . "\r\n";
  $mensaje .= "El departamento se encuentra en el piso: " . $pisoPropiPro . "." . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "La orientación es: " . $orientacionPro . "." . "\r\n";
  $mensaje .= $elevadorPro . " tiene elevador." . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Sus amenidades son:" . "\r\n";
  if (!empty($seguridadPro)) {
    $mensaje .= "* Seguridad." . "\r\n";
  }
  if (!empty($gimnasioPro)) {
    $mensaje .= "* Gimnasio." . "\r\n";
  }
  if (!empty($albercaPro)) {
    $mensaje .= "* Alberca." . "\r\n";
  }
  if (!empty($roofGardenPro)) {
    $mensaje .= "* Roof Garden." . "\r\n";
  }
  if (!empty($otrosPro)) {
    $mensaje .= "* Otros: " . $otrosEspecificaPro . "." . "\r\n";
  }
  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "La cuota de mantenimiento es: $" . $cuotaMantenimientoPro . " MXN." . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "\r\n";

  $mensaje .= "Espera recibir: $" . $dineroRecibido . " MXN por su propiedad." . "\r\n";
  $mensaje .= "La relación con la propiedad es: " . $relacionPro . "." . "\r\n";
  $mensaje .= "Nos conocio por: " . $conocerPro . "." . "\r\n";

  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Aceptó la política de privacidad, términos y condiciones: ";
  if (!empty($contactoPolPrivacidad)) {
    $mensaje .= "Si." . "\r\n";
  } else {
    $mensaje .= "No." . "\r\n";
  }

  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "¡Ponerse en contacto inmediatamente!";

  if (mail($destinatario, $contactoAsunto, utf8_decode($mensaje), $header)) {
    echo "<script>setTimeout(\"location.href='../html/correoEnviado.html'\", 250)</script>";
  } else {
    echo "<script>setTimeout(\"location.href='../html/correoNoEnviado.html'\", 250)</script>";
  }

?>