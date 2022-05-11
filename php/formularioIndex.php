<?php 

  // Se establece la dirección de a quien va dirigido el mensaje y asunto del correo.
  $destinatario = "l.espi1213@gmail.com"; //Al final cambiar a contacto@happyhousemx.com

  // Variables del formulario
  $contactoNombre = $_POST['nombre'];
  $contactoTelefono = $_POST['telefono'];
  $contactoEmail = $_POST['correo'];
  $contactoMensaje = $_POST['mensaje'];
  $contactoPolPrivacidad = $_POST['politicaPrivacidad'];

  // Header
  $header = 'From: ' . $contactoEmail . "\r\n";
  $header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
  $header .= "Mime-Version: 1.0 \r\n";
  $header .= "Content-Type: text/plain";

  // Asunto
  $contactoAsunto = "Tengo una duda";

  // Se construye el mensaje con los datos enviados
  $mensaje = "Este mensaje fue enviado por: " . $contactoNombre . "\r\n";
  $mensaje .= "Sus datos son:" . "\r\n";
  $mensaje .= "Correo: " .  $contactoEmail . "\r\n";
  $mensaje .= "Teléfono: " . $contactoTelefono . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Su mensaje es: " . "\r\n";
  $mensaje .= $contactoMensaje . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Aceptó la política de privacidad, términos y condiciones: ";

  if (!empty($contactoPolPrivacidad)) {
    $mensaje .= "Si" . "\r\n";
  } else {
    $mensaje .= "No" . "\r\n";
  }

  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "¡Ponerse en contacto inmediatamente!";

  if (mail($destinatario, $contactoAsunto, utf8_decode($mensaje), $header)) {
    echo "<script>setTimeout(\"location.href='../html/correoEnviadoIndex.html'\", 250)</script>";
  } else {
    echo "<script>setTimeout(\"location.href='../html/correoNoEnviado.html'\", 250)</script>";
  }

?>