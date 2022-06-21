// Clase constructora de objetos
class Libro {
    constructor (titulo, precio, genero, stock){
        this.titulo = titulo;
        this.precio = Number(precio);
        this.genero = genero;
        this.stock = Number(stock);
    }

    actualizarStock (cantidad) {
        this.stock = this.stock - cantidad;
    }
}

// Array de objetos 
const arrayCatalogo = [];

// Creación de nuevos libros
arrayCatalogo.push (new Libro ("El aleph", 2049, "cuento", 15));
arrayCatalogo.push (new Libro ("Ficciones", 3099, "cuento", 12));
arrayCatalogo.push (new Libro ("Inquisiciones/Otras inquisiciones", 3799, "ensayo", 15));
arrayCatalogo.push (new Libro ("Historia de la eternidad", 2049, "cuentos", 11));
arrayCatalogo.push (new Libro ("La rosa profunda", 1999, "poesia", 11));
arrayCatalogo.push (new Libro ("La cifra", 1399, "poesia", 11));
console.log (arrayCatalogo);

// Intento de crear elementos desde objetos
for (const producto of arrayCatalogo) {
    let contenedor = document.createElement ("div");
    contenedor.innerHTML = `<h5> Título: ${producto.titulo}</h5>
    <p> Género: ${producto.genero}</p>
    <b> $${producto.precio}</b>`;
    document.body.appendChild (contenedor);
}



// FUNCIONES PARA ORDENAR
// Ordenar precios de Menor a Mayor
const deMenoraMayor = () => {
    arrayCatalogo.sort ( (a,b) => a.precio - b.precio);
    // console.log (arrayCatalogo);
    mostrarListaOrdenada();    
}

// Ordenar precios de Mayor a Menor
const deMayoraMenor = () => {
    arrayCatalogo.sort ( (a,b) => b.precio - a.precio);
    // console.log (arrayCatalogo);
    mostrarListaOrdenada();   
}

const mostrarListaOrdenada = ()  => {
    let arrayLista = [];
    arrayCatalogo.forEach (elemento => arrayLista.push (elemento.titulo + " $" + elemento.precio));
    alert ("Lista de precios:" + "\n" +arrayLista.join ("\n"))
}

// FUNCIONES PARA REALIZAR UNA COMPRA
let total = 0;

const agregarAlCarrito = () => {
    let otroLibro;
    let libro = "";
    let cantidad = 0;
    let precio = 0;

    do {
        libro = prompt ("¿Qué título quisiera comprar?");
        cantidad = Number( prompt ("¿Cuántos ejemplares quiere?"));
        // console.log (cantidad);

        switch (libro) {
            case arrayCatalogo[0].titulo:
                arrayCatalogo[0].actualizarStock (cantidad);

                if (arrayCatalogo[0].stock < 0 || isNaN (cantidad)) {
                    alert ("Lo sentimos mucho. En este momento no tenemos stock de "+arrayCatalogo[0].titulo)
                    arrayCatalogo[0].stock = arrayCatalogo[0].stock + cantidad;
                    precio = 0;
                    cantidad = 0;

                } else {
                    precio = arrayCatalogo[0].precio;
                }
                break;

                case arrayCatalogo[1].titulo:
                    arrayCatalogo[1].actualizarStock (cantidad);
    
                    if (arrayCatalogo[1].stock < 0 || isNaN (cantidad)) {
                        alert ("Lo sentimos mucho. En este momento no tenemos stock de "+arrayCatalogo[1].titulo)
                        arrayCatalogo[1].stock = arrayCatalogo[1].stock + cantidad;
                        precio = 0;
                        cantidad = 0;
    
                    } else {
                        precio = arrayCatalogo[1].precio;
                    }
                    break;        

                    case arrayCatalogo[2].titulo:
                arrayCatalogo[2].actualizarStock (cantidad);

                if (arrayCatalogo[2].stock < 0 || isNaN (cantidad)) {
                    alert ("Lo sentimos mucho. En este momento no tenemos stock de "+arrayCatalogo[2].titulo)
                    arrayCatalogo[2].stock = arrayCatalogo[2].stock + cantidad;
                    precio = 0;
                    cantidad = 0;

                } else {
                    precio = arrayCatalogo[2].precio;
                }
                break;

                case arrayCatalogo[3].titulo:
                arrayCatalogo[3].actualizarStock (cantidad);

                if (arrayCatalogo[3].stock < 0 || isNaN (cantidad)) {
                    alert ("Lo sentimos mucho. En este momento no tenemos stock de "+arrayCatalogo[3].titulo)
                    arrayCatalogo[3].stock = arrayCatalogo[3].stock + cantidad;
                    precio = 0;
                    cantidad = 0;

                } else {
                    precio = arrayCatalogo[3].precio;
                }
                break;

                case arrayCatalogo[4].titulo:
                arrayCatalogo[4].actualizarStock (cantidad);

                if (arrayCatalogo[4].stock < 0 || isNaN (cantidad)) {
                    alert ("Lo sentimos mucho. En este momento no tenemos stock de "+arrayCatalogo[4].titulo)
                    arrayCatalogo[4].stock = arrayCatalogo[4].stock + cantidad;
                    precio = 0;
                    cantidad = 0;

                } else {
                    precio = arrayCatalogo[4].precio;
                }
                break;

                case arrayCatalogo[5].titulo:
                    arrayCatalogo[5].actualizarStock (cantidad);
    
                    if (arrayCatalogo[5].stock < 0 || isNaN (cantidad)) {
                        alert ("Lo sentimos mucho. En este momento no tenemos stock de "+arrayCatalogo[5].titulo)
                        arrayCatalogo[5].stock = arrayCatalogo[5].stock + cantidad;
                        precio = 0;
                        cantidad = 0;
    
                    } else {
                        precio = arrayCatalogo[5].precio;
                    }
                    break;
                
            default:
                alert ("Alguno de los datos ingresados no es correcto");
                precio = 0;
                cantidad = 0;
        }

        total = total + precio * cantidad;
        otroLibro = confirm ("¿Querés agregar otro libro al carrito?");
    } while (otroLibro);
}

// Función para calcular descuento
const obtenerDescuento = (total) => {
    if (total > 5000) {
        total = total * 0.85;
        alert ("¡Accediste a 15% de descuento en tu compra!")
    }
    return total;
}

// Función para calcular el envío
const obtenerPrecioDeEnvio = (total) => {
    let confirmacion = confirm ("¿Quisiera que le enviemos la compra a su domicilio?");
    if (confirmacion && total > 3500) {
        alert ("Su compra cuenta con envío sin cargo. El total de su compra es $" + total);
    } else if (confirmacion && total < 3500 && total != 0) {
        total = total + 700;
        alert ("El envío tiene un costo de $700. El total de su compra es $" + total);
    }
    return total;
}

// Función para calcular cantidad de cuotas
let cuotas = 0;
const obtenerCantCuotas = () => {
    let confirmacion = confirm ("¿Quiere pagar en cuotas?");
    if (confirmacion) {
        cuotas = parseInt (prompt ("¿Cuántos pagos desea realizar?"));
        if (cuotas == 0) {
            cuotas = 1;
        } else if (isNaN (cuotas)){
            obtenerCantCuotas();
        }
    } else {
        cuotas = 1;
    }
    return cuotas;
}

// Función para calcular los intereses de las cuotas
const obtenerIntereses = (cuotas) => {
    if (cuotas == 1) {
        return 0;
    } else {
        let tasa = 16.5 + cuotas * 0.2;
        return tasa * cuotas;
    }
}

// Calcular total del carrito
const obtenerTotal = (total, cuotas, intereses) => {
    total = (total + intereses);
    let valorCuota = total / cuotas;
    alert ("El total a pagar es $" + total + " en "+ cuotas +" cuotas de $" + Math.ceil (valorCuota));
}

// LLAMADO A LAS FUNCIONES
const comprarProductos = () => {
    if (confirm ("¿Quiere ordenar la lista de productos por precio en orden ascendente?")) {
        deMenoraMayor();
    } else {
        deMayoraMenor();
    }
    agregarAlCarrito();
    obtenerTotal (obtenerPrecioDeEnvio (obtenerDescuento (total)), obtenerCantCuotas(), obtenerIntereses(cuotas));
}

comprarProductos();



















































