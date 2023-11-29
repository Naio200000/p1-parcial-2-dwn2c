<?php


class Producto {

    public $id;
    public $nombre;
    public $descripCorta;
    public $descripLarga;
    public $etc;
    public $tiempo;
    public $precio;
    public $imagen;
    public $categoria;

    /**
    * Devuelve nuestro catalogo dependiendo de la categoria seleccionada.
    * @param string $categoria : Es un string de la categoría que estamos buescando.
    * @return array Un array de todos nuestros productos de la categoria seleccionada.
    */
    Public function catalogoCompleto() :array {
        
        $productosOBJ = [];
        $productosJSON = file_get_contents('../datos/productos.json');
        $productos = json_decode($productosJSON);
        foreach ($productos as $object) {
            $newObject = new self ();

            $newObject->id = $object->id;
            $newObject->nombre = $object->nombre;
            $newObject->descripCorta = $object->descrip;
            $newObject->descripLarga = $object->descrip_larga;
            $newObject->precio = $object->precio;
            $newObject->imagen = $object->imagen;
            $newObject->categoria = $object->categoria;

            $productosOBJ[] = $newObject;

        }

        return $productosOBJ;
    }

    /**
    * Devuelve nuestro catalogo dependiendo de la categoria seleccionada.
    * @param string $categoria : Es un string de la categoría que estamos buescando.
    * @return array Un array de todos nuestros productos de la categoria seleccionada.
    */
    public function catalogoCategoria(string $categoria): array {

        $catalogoCategoria = [];
        $completo = $this->catalogoCompleto();

        foreach ($completo as $cate) {
            if ($cate->categoria == $categoria) {
                $catalogoCategoria[] = $cate;
            }
        }
        return $catalogoCategoria;

    }

  
    /**
    * Decuelve un producto dependiendo de su ID;
    * @param int $id : ID unico de cada producto.
    * @return Producto Un array con el producto encontrado o null si no encuentra nada. 
    */
    public function productoID (int $id):?Producto {

        $completo = $this->catalogoCompleto();

        foreach ($completo as $producto) {
            if ($producto->id == $id) {
                return $producto;
            }
        }

        return null; 
    }

}
