<?php 

  // Variables del formulario
  $nombreContacto = $_POST['nombre'];
  $telefonoContacto = $_POST['telefono'];
  $correoContacto = $_POST['correo'];
  $fechaCita = $_POST['fecha'];
  $horaCita = $_POST['hora'];
  $idPropiedadDesarrollo = $_POST['idDesarrollo'];
  $politicas = $_POST['politicaPrivacidad'];

  // Se establece la dirección de a quien va dirigido el mensaje y asunto del correo.
  $destinatario = "contacto@happyhousemx.com";

  // Header
  $header = 'From: ' . $correoContacto . "\r\n";
  $header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
  $header .= "Mime-Version: 1.0 \r\n";
  $header .= "Content-Type: text/plain";

  // Asunto
  $contactoAsunto = "Cita para visita a propiedad con id: " . $idPropiedadDesarrollo;

  // Se construye el mensaje con los datos enviados
  $mensaje = "Este mensaje fue enviado por: " . $nombreContacto . "\r\n";
  $mensaje .= "Sus datos son:" . "\r\n";
  $mensaje .= "Correo: " .  $correoContacto . "\r\n";
  $mensaje .= "Teléfono: " . $telefonoContacto . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Quiere agendar una cita para visitar la propiedad con ID: " . $idPropiedadDesarrollo . "\r\n";
  $mensaje .= "el día:" . "\r\n";
  $mensaje .= $fechaCita . "\r\n";
  $mensaje .= "a las" . "\r\n";
  $mensaje .= $horaCita . " hrs." . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Aceptó la política de privacidad, términos y condiciones: ";

  if (!empty($politicas)) {
    $mensaje .= "Si." . "\r\n";
  } else {
    $mensaje .= "No." . "\r\n";
  }

  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "¡Ponerse en contacto inmediatamente!";

  if (mail($destinatario, $contactoAsunto, utf8_decode($mensaje), $header)) {
    echo "<script>setTimeout(\"location.href='../html/correoEnviadoVisita.html'\", 100)</script>";
  } else {
    echo "<script>setTimeout(\"location.href='../html/correoNoEnviado.html'\", 100)</script>";
  }

?>