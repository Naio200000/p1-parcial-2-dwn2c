<?php

require_once('../Clases/Producto.php');

$productos = (new Producto)->catalogoCompleto();


echo '<pre>';
echo json_encode($productos);
echo '</pre>';

echo '<pre>';
print_r($productos);
echo '</pre>';


