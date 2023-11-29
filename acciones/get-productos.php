<?php

require_once('../Clases/Producto.php');

$productos = (new Producto)->catalogoCompleto();


echo '<pre>';
print_r($productos);
echo '</pre>';
