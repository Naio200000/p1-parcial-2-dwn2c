<?php

require_once('../Clases/Producto.php');
$categoria = $_GET['categoria'] ?? false;
$id = $_GET['id'] ?? false;

if (!$categoria && !$id) {
    $data = (new Producto)->catalogoCompleto();
} 
if ($categoria) {
    $data = (new Producto)->catalogoCategoria($categoria);
}
if ($id) {
    $data = (new Producto)->productoID($id);
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);


// echo '<pre>';
// print_r($data);
// echo '</pre>';