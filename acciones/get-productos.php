<?php

require_once('../Clases/Producto.php');
$categoria = $_GET['categoria'] ?? false;

if (!$categoria) {
    $data = (new Producto)->catalogoCompleto();
} else {
    $data = (new Producto)->catalogoCategoria($categoria);
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);


// echo '<pre>';
// print_r($data);
// echo '</pre>';