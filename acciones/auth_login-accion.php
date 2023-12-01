<?php
require_once('../Clases/Usuario.php');

$datosPOST = $_POST;

$usuario = (new Usuario)->log_in($datosPOST['username'], $datosPOST['password']);


if ($usuario) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['login' => true, 'username' => $usuario]);
} elseif ($usuario === false) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['login' => false, 'mensaje' => 'La contraseña no es correcta']);
} else {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['login' => null, 'mensaje' => 'El usuario no se encontro en nuestra Base de datos']);
}