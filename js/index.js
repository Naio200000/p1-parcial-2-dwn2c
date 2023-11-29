/*
 *  Alsinet Nicolas
 */
/*Declaracion de Constantes */
const d = document
const htmlProductos = d.querySelector('#productos');
const exampleModal = d.getElementById('exampleModal');
const selectorCategoria = d.getElementById('categoria-producto');
const btn_miniCarrito = d.querySelectorAll('.minicarrito-cantidad');
// Declaracion de Clases
/**
 * Clase Productos con sus metodos
 */
class Producto {

    /**
     * 
     * @param {Id del producto} id 
     * @param {Nombre del Producto} nombre 
     * @param {Descripcion de card} descrip 
     * @param {Descripcion del modal} descrip_larga 
     * @param {Precio} precio 
     * @param {Array de Imagenes} imagen 
     * @param {Array de text alt de imagenes} altImagen 
     * @param {categoria} categoria 
     * @param {modulo html} card 
     */
    constructor(id,nombre, descrip, descrip_larga, precio, imagen,altImagen, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.descrip = descrip;
        this.descrip_larga = descrip_larga;
        this.precio = precio;
        this.imagen = imagen;
        this.altImagen = altImagen
        this.categoria = categoria;
        this.card = this.crearHTMLproductoCard()
    };
    /**
     * Toma los datos del producto y crea el div con el precio y el boton de agregar a carrito
     * @returns div con los 2 elementos
     */
    creaPrecioBoton () {
        let productoPrecio = d.createElement('span');
        productoPrecio.className = 'col';
        productoPrecio.innerHTML = `$${this.precio}.00`;
        let productoBoton = d.createElement('button');
        productoBoton.className = 'btn btn-komei col';
        productoBoton.id = `${this.id}boton_agregar`;
        productoBoton.innerHTML = `Agregar <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>`;
        productoBoton.addEventListener('click', (e) => {
            let boton = e.target;
            for (let i = 0; i < productos.length; i++) {
                if (parseInt(boton.id) == productos[i].id) {
                    carrito.agregar(productos[i])
                    break
                }
            }
            mostrarMiniCarrito();
        })
        let precioBoton = document.createElement('div');
        precioBoton.className = 'row px-2';
        precioBoton.append(productoPrecio, productoBoton);
        return precioBoton;
    }
    /**
     * Crea los elementos y los agrupa en un nodo
     * Crea el boton que escucha el evento click para abrir el modal del descript 
     * @returns Nodo de html con todos los elemntos de body de las tarjetas de productos
     */
    creaCardBody () {
        let productoNombre = d.createElement('h3');
        productoNombre.setAttribute('type', 'button');
        productoNombre.setAttribute('class', ' card-title titulocard');
        productoNombre.setAttribute('data-bs-toggle', 'modal');
        productoNombre.setAttribute('data-bs-target', '#ProductoModal')
        productoNombre.id = `${this.id}boton_mostrar`;
        productoNombre.addEventListener('click', (e) => {
            let boton = e.target;
            for (let i = 0; i < productos.length; i++) {
                if (parseInt(boton.id) == productos[i].id) {
                    productos[i].agregarDatosModal();
                    break
                }
            }
        })
        productoNombre.innerHTML = this.nombre;
        let productoDescrip = d.createElement('p');
        productoDescrip.className = 'card-text';
        productoDescrip.innerHTML = this.descrip;
        let precioBoton = this.creaPrecioBoton()
        let productoText = d.createElement('div');
        productoText.className = 'card-body';
        productoText.append(productoNombre, productoDescrip, precioBoton);
        return productoText;
    }
    /**
     * Genera todos los elementos que iran a las pastillas y llama a las funciones necesarias
     * @returns Nodo completo con la pastilla de producto
     */
    crearHTMLproductoCard(){
        let productoImg = d.createElement('img');
        productoImg.className = 'card-img-top';
        productoImg.setAttribute('src', this.imagen[0]);
        productoImg.setAttribute('alt', this.altImagen[0]);
        let productoCategoria = d.createElement('span');
        productoCategoria.className = 'mx-2 ms-auto';
        productoCategoria.innerHTML = this.categoria;
        let productoText = this.creaCardBody ();
        let productoCard = d.createElement('div');
        productoCard.className = 'card tarjetas-producto'
        productoCard.append(productoImg, productoCategoria, productoText);
        let col = d.createElement('div');
        col.className = 'col';
        col.append(productoCard);
        return col;
    }
    /**
     * Toma un elemento y le agrega el escuchhador del evento click para ejecutar la funcion que agrega los valores al mini carrito dentro del modal del producto
     */
    agregarBotonModal() {
        let boton = d.getElementById('botonProducto').children[1];
        if (boton.id == 'cambiarIDBoton') {
            boton.innerHTML = `Agregar <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>`;
            boton.addEventListener('click', (e) => {
                let boton = e.target;
                for (let i = 0; i < productos.length; i++) {
                    if (parseInt(boton.id) == productos[i].id) {
                        carrito.agregar(productos[i])
                        break
                    }
                }
                mostrarMiniCarrito();
            })
        }
        boton.id = `${this.id}productoboton`;
    }
    /**
     * Crea el modal del producto
     * Toma los elementos del modal y modifica sus valores
     */
    agregarDatosModal() {
        d.getElementById('tituloProducto').innerHTML = this.nombre
        let carrousel = d.getElementById('carrusel-producto').children;
        for (let i = 0; i < carrousel.length; i++) {
            carrousel[i].innerHTML = '';
            let img = d.createElement('img');
            img.setAttribute('src', this.imagen[i]);
            img.setAttribute('alt', this.altImagen[i]);
            img.setAttribute('class', 'd-block w-100');
            carrousel[i].appendChild(img);
        }
        d.getElementById('categoriaProducto').innerHTML = this.categoria;
        d.getElementById('descripProducto').innerHTML = this.descrip_larga;
        d.getElementById('precioProducto').innerHTML = this.precio;
        d.getElementById('precioCuotas').innerHTML = (this.precio / 6).toFixed(2);
        this.agregarBotonModal();
    }
};
/**
 * Clase para el carrito
 */
class Carrito {
    
    /**
     *Se pusheando productos de la clase producto 
     */
    constructor (){
        this.producto = [];
    }
    /**
     * 
     * @param {Objeto de la clase Producto} objeto 
     */
    agregar(objeto){
        this.producto.push(objeto);

    }
    /**
     * 
     * @param {Clase de los elementos a buscar en el DOM} clase 
     * @param {Valor a modificar} valor 
     */
    armarMiniCarrito (clase, valor) {
        let span = d.getElementsByClassName(clase);
        for (let i = 0; i < span.length; i++){
            span[i].innerHTML = valor
        }
    }
    /**
     * Toma todos los productos ingresados en el carrito y suma su precio
     * @returns devuelve numero total de la suma de todos los precios agregados
     */
    calcularTotal() {
        let total = 0;
        for (let i = 0; i < carrito.producto.length; i++) {
            total += parseInt(this.producto[i].precio);
        }
        return total
    }
    /**
     * 
     * @param {Ingresa valor del index para modificar las clases} i 
     * @returns Devuelve un nodo de HTML con el boton para eliminar producto del carrito
     */
    creaBotonCerrar(i){
        let divBtnCerrar = d.createElement('div');
        divBtnCerrar.setAttribute('class', ` productoCarritoCerrar ms-auto`);
        divBtnCerrar.id = `${i}carritoProducto`
        let spanCerrar = d.createElement('span');
        spanCerrar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" id="${i}carritoProducto" class=" bi bi-x" viewBox="0 0 16 16">
        <path id="${i}carritoProducto" class="" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>`;
        divBtnCerrar.appendChild(spanCerrar);
        divBtnCerrar.addEventListener('click', (e) => {

            let boton = e.target;
            let index = parseInt(boton.id);
            carrito.producto.splice(index,1)
            carrito.armarCarrito();
            mostrarMiniCarrito () 
        })
        return divBtnCerrar;
    } 
    /**
     * 
     * @param {Index del producto dentro del array de carrito} i 
     * @returns devuelve un NODO HTML con todos lo elementos que conforman el producto en el carrito
     */
    armarCarritoContenedores(i) {
        let divImagen = d.createElement('div');
        divImagen. setAttribute('class', 'productoCarritoImagen mx-auto');
        let imagen = d.createElement('img');
        imagen.setAttribute('src', this.producto[i].imagen[0]);
        imagen.setAttribute('alt', this.producto[i].altImagen[0]);
        imagen.setAttribute('class', 'rounded-2');
        divImagen.appendChild(imagen);
        let divTexto = d.createElement('div');
        divTexto. setAttribute('class', 'productoCarritoTexto my-auto');
        let pTitulo = d.createElement('p');
        let pDescrip = d.createElement('p');
        pTitulo.innerHTML = this.producto[i].nombre;
        pTitulo.setAttribute('class', 'h4');
        pDescrip.innerHTML = this.producto[i].descrip;
        divTexto.append(pTitulo, pDescrip);
        let divPrecio = d.createElement('div');
        divPrecio.setAttribute('class', 'productoCarritoPrecio ms-auto');
        divPrecio.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
        </svg>`;
        let spanPrecio = d.createElement('span');
        spanPrecio.id = 'productoCarritoPrecio';
        spanPrecio.innerHTML = this.producto[i].precio;
        divPrecio.appendChild(spanPrecio);
        let divCerrar = this.creaBotonCerrar(i);
        let divContenedor = d.createElement('div');
        divContenedor.setAttribute('class', 'contenedor rounded-2')
        divContenedor.append(divImagen, divTexto, divCerrar, divPrecio);
        return divContenedor
    }
    /**
     * Itera el metodo armarCarritoContenedores por cada producto en el array carrito
     * agrega el valor y las cuotas 
     */
    armarCarrito(){
        let contenedorProductosCarrito = d.getElementById('contenedorProductosCarrito');
        contenedorProductosCarrito.innerHTML = ''
        for (let i = 0; i < carrito.producto.length; i++) {   
            contenedorProductosCarrito.appendChild(this.armarCarritoContenedores(i));
        }
        d.getElementById('carritoPrecioProducto').innerHTML = this.calcularTotal();;
        d.getElementById('carritoPrecioTotalCuota').innerHTML = (this.calcularTotal() / 6).toFixed(2);
    }
};
/* Armado de Objetos */
// Se declaran la productos y se ejecuta la funcion cargar productos que itera y crea el array de productos de clase Producto
const traerProductos = async function () {
    let productos = []
    await fetch('./../acciones/get-productos.php')
        .then(algo => algo.json())
        .then (resultado => resultado.map((p) => {
            productos.push(cargarProductos(p))
        }) )
        mostrarProductos (productos);
}

const traerProductosCategoria = async function (categoria) {
    let productos = []
    await fetch(`./../acciones/get-productos.php?categoria=${categoria}`)
        .then(algo => algo.json())
        .then (resultado => resultado.map((p) => {
            productos.push(cargarProductos(p))    
        }) )
        mostrarProductos (productos);
}


// Se declara el objeto carrito de clase Carrito
let carrito = new Carrito;



/**
 * Itera la creacion de nuevos Productos
 * @param {Objeto JSON} data 
 */
function cargarProductos(data) {
        return new Producto (data.id, data.nombre, data.descrip, data.descrip_larga, data.precio, data.imagen, data.altImagen, data.categoria);
}
/**
 * Toma el nodo donde se van mostrar todas las tarjetas de productos y agrega las cards de cada producto
 * @param {Array de productos} array 
 */
function mostrarProductos (array) {

    htmlProductos.innerHTML = '';
    for (let i = 0; i < 21; i++) {
        htmlProductos.appendChild(array[i].card);
    }
}
/**
 * Ejecuta los metodos del carrito para agregar los valores de cantidad y precio
 */
function mostrarMiniCarrito () {
    carrito.armarMiniCarrito('minicarrito-cantidad', carrito.producto.length);
    carrito.armarMiniCarrito('minicarrito-precio', carrito.calcularTotal());

}
/**
 * 
 * @param {Toma el valor del selector de categorias y filtra los productos por ese valor} valor 
 * @returns array de productos filtrados
 */
/**
 * Agregar el event listener al boton del carrito para ejecutar el modal
 */
function btn_carrito() {
    for (let i = 0; i < btn_miniCarrito.length; i++){
        btn_miniCarrito[i].parentNode.addEventListener('click', () => {
            carrito.armarCarrito();
        })
    }
}
/**
 * Agrega el event listener 'change' en el selector de categoria y de ser necesario ejecuta la funcion filtrar y los muestra
 */
selectorCategoria.addEventListener('change', () => {
    if (selectorCategoria.value == 'Todas') {

        mostrarProductos (productos);
    } else {
        mostrarProductos (traerProductosCategoria(selectorCategoria.value));
    }
})

/**
 * Se ejecutan las primeras funciones de carga al iniciar la pagina
 */
traerProductos()
mostrarMiniCarrito();
btn_carrito();
