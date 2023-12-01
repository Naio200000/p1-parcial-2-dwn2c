<?php
require_once('../Clases/Usuario.php');

$datosPOST = $_POST;

$usuario = (new Usuario)->log_in($datosPOST['username'], $datosPOST['password']);


echo '<pre>';
print_r($datosPOST);
print_r($usuario);
var_dump($usuario);
echo '</pre>';