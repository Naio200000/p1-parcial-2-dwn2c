<?php

require_once('../Clases/Producto.php');

$data = (new Producto)->catalogoCompleto();

header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);


// echo '<pre>';
// print_r($data);
// echo '</pre>';