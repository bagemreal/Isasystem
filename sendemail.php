<?php
error_reporting(0);
$nombre = $_POST['nombre'];
$correo= $_POST['correoenvia'];
$telefono = $_POST['telefono'];
$sexo=$_POST['GrupoOpciones1'];
$mensaje=$_POST['mensaje'];
$radio= $_POST['GrupoOpciones2'];
$opinion=$_POST['opinion'];
$header = 'From: ' . $correo . " rn";
$header .= "X-Mailer: PHP/" . phpversion() . " rn";
$header .= "Mime-Version: 1.0 rn";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por : " . $nombre. ", ";
$mensaje .= "E-mail : " . $correo. ", ";
$mensaje .= "Asunto : " . $_POST['subject'] . ", ";
$mensaje .= "Mensaje : " . $_POST['mensaje'] . ", ";
$mensaje .= "Fecha Envío ; " . date('d/m/Y', time());

$para = 'contacto@isasystem.cl';
$asunto = 'Formulario enviado desde isasystem.cl';

mail($para, $asunto, utf8_decode($mensaje), $header);


?>