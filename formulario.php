<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = htmlspecialchars(trim($_POST["nombre"] ?? ''));
  $email = htmlspecialchars(trim($_POST["email"] ?? ''));
  $asunto = htmlspecialchars(trim($_POST["asunto"] ?? ''));
  $mensaje = htmlspecialchars(trim($_POST["mensaje"] ?? ''));

  if ($nombre && $email && $asunto && $mensaje) {
    echo "<!DOCTYPE html>
    <html lang='es'>
    <head>
      <meta charset='UTF-8'>
      <title>Mensaje enviado</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #fff7f2;
          padding: 2rem;
          color: #5c3d2e;
        }
        .respuesta {
          background-color: #ffe9dc;
          padding: 1.5rem;
          border-radius: 10px;
          max-width: 600px;
          margin: auto;
          text-align: center;
        }
        a {
          display: inline-block;
          margin-top: 1rem;
          color: #d77b5e;
          text-decoration: none;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class='respuesta'>
        <h2>¡Gracias por contactarte!</h2>
        <p>Hola <strong>$nombre</strong>, recibimos tu mensaje sobre <strong>$asunto</strong>.</p>
        <p>Te responderemos a <strong>$email</strong> lo antes posible.</p>
        <a href='index.html'>&larr; Volver al sitio</a>
      </div>
    </body>
    </html>";
  } else {
    echo "Por favor completá todos los campos. <a href='index.html'>Volver</a>";
  }
} else {
  header("Location: index.html");
  exit;
}
?>