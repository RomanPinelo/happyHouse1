<?php 

  // Se establece la dirección de a quien va dirigido el mensaje y asunto del correo.
  $destinatario = "l.espi1213@gmail.com"; //Al final cambiar a contacto@happyhousemx.com

  // Variables del formulario
  $cantidadMin = $_POST['minimo'];
  $cantidadMax = $_POST['maximo'];
  $zonaInteres = $_POST['zonaInteres'];
  $tipoPropiedad = $_POST['tipo_Propiedad'];
  $superficiePro = $_POST['superficie'];
  $habitacionesPro = $_POST['habitaciones'];
  $banosPro = $_POST['banos'];
  $estacionamientoPro = $_POST['estacionamiento'];

  $seguridadPro = $_POST['seguridad'];
  $gimnasioPro = $_POST['gimnasio'];
  $albercaPro = $_POST['alberca'];
  $roofGardenPro = $_POST['roofGarden'];
  $otrosPro = $_POST['otros'];
  $otrosEspeciPro = $_POST['otrosEspecifica'];

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
  $contactoAsunto = "Características deseadas en nueva propiedad";

  // Se construye el mensaje con los datos enviados
  $mensaje = "Este mensaje fue enviado por: " . $contactoNombre . "\r\n";
  $mensaje .= "Sus datos son:" . "\r\n";
  $mensaje .= "Correo: " .  $contactoEmail . "\r\n";
  $mensaje .= "Teléfono: " . $contactoTelefono . "\r\n";
  $mensaje .=  "\r\n";
  $mensaje .=  "\r\n";
  $mensaje .= "Las características deseadas para su nuevo hogar son: " . "\r\n";
  $mensaje .=  "\r\n";
  $mensaje .= "Presupuesto mínimo: " . $cantidadMin . "\r\n";
  $mensaje .= "Presupuesto mínimo: " . $cantidadMax . "\r\n";
  $mensaje .= "Zona de interes: " . $zonaInteres . "\r\n";
  $mensaje .= "Tipo de propiedad: " . $tipoPropiedad . "\r\n";
  $mensaje .= "Superficie: " . $superficiePro . "\r\n";
  $mensaje .= "Habitaciones: " . $habitacionesPro . "\r\n";
  $mensaje .= "Baños: " . $banosPro . "\r\n";
  $mensaje .= "Estacionamientos: " . $estacionamientoPro . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Amenidades:" . "\r\n";
  
  if (!empty($seguridadPro)) {
    $mensaje .= "* Seguridad" . "\r\n";
  }
  if (!empty($gimnasioPro)) {
    $mensaje .= "* Gimnasio" . "\r\n";
  }
  if (!empty($albercaPro)) {
    $mensaje .= "* Alberca" . "\r\n";
  }
  if (!empty($roofGardenPro)) {
    $mensaje .= "* Roof Garden" . "\r\n";
  }
  if (!empty($otrosPro)) {
    $mensaje .= $otrosEspeciPro . "\r\n";
  }

  $mensaje .=  "\r\n";
  $mensaje .=  "\r\n";
  $mensaje .=  "\r\n";
  $mensaje .= "Su mensaje es: " . "\r\n";
  $mensaje .= "\r\n";
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
    echo "<script>setTimeout(\"location.href='../html/correoEnviadoCompra.html'\", 250)</script>";
  } else {
    echo "<script>setTimeout(\"location.href='../html/correoNoEnviado.html'\", 250)</script>";
  }

?>