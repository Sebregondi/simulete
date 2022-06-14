// ARRAY DE OBJETOS
const catalogo = [
    {id: 1, titulo: 'El aleph', precio: 3099, genero: "cuentos"},
    {id: 2, titulo: 'Ficciones', precio: 3099, genero: "cuentos"},
    {id: 3, titulo: 'Inquisiciones-Otras inquisiciones', precio: 3799, genero: "ensayo"},
    {id: 4, titulo: 'La rosa profunda', precio: 2049, genero: "poesia"},
    {id: 5, titulo: 'Historia de la eternidad', precio: 2049, genero: "ensayo"},
    {id: 6, titulo: 'La cifra', precio: 2049, genero: "poesia"},
]

// Filtrar por género
const filtrarEnsayos = catalogo.filter ( (elemento) => elemento.genero.includes ("ensayo") );
console.log (filtrarEnsayos);

// Ordenar precios de menor a mayor
catalogo.sort ( (a, b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;
    }
    return 0;
})
console.log (catalogo);


// FUNCIÓN CONSTRUCTORA PARA REALIZAR PEDIDO
class Pedido {
    constructor (producto, precio, cantidad) {
        this.producto = producto,
        this.precio = precio,
        this.cantidad = cantidad,
        this.descuento = 0,
        this.envio = 0,
        this.subTotal = 0,
        this.total =0
    }

calcularSubTotal() {
    this.subTotal = this.precio * this.cantidad;
}

calcularEnvio () {
    if (this.cantidad >= 2) {
        this.envio = 0;
    } else {
        this.envio = 380;
    }
}

calcularDescuento () {
    this.descuento = 15 * this.subTotal / 100;
    return this.descuento;
    }

calcularTotal () {
    this.total = parseFloat(this.subTotal + this.envio - this.descuento);
    return this.total;
    }
}

// FUNCIÓN PARA HACER UN PEDIDO
const pedidoProducto = () => {
    let producto = 0;
    let cantidadProducto = 0;
    let precio = 0;

while (producto == 0 || producto > 6 || !producto) {
    producto = parseInt ( prompt ("¿Qué libro de Jorge Luis Borges quieres comprar?: 1) El Aleph $3099 2) Ficciones $3099 3) Inquisiciones-Otras inquisiciones $3799 4) La rosa profunda $2049 5) Historia de la eternidad $2049 6) La cifra $2049"));
}

switch (producto) {
    case 1:
        producto = "El aleph";
        precio = 3099;
        break;

    case 2:
        producto = "Ficciones";
        precio = 3099;
        break;

    case 3:
        producto = "Inquisiciones-Otras inquisiciones";
        precio = 3799;
        break;

    case 4:
        producto = "La rosa profunda";
        precio = 2049;
        break;

    case 5:
        producto = "Historia de la eternidad";
        precio = 2049;
        break;

    case 6:
        producto = "La cifra";
        precio = 2049;
        break;
    }

while (cantidadProducto == 0 || !cantidadProducto) {
    cantidadProducto = parseInt (prompt ("Elegiste el título: "+ producto + "¿Cuántos ejemplares quieres?"));
}

const compra = new Pedido (producto, precio, cantidadProducto);

return compra;
}; // FIN DE LA FUNCIÓN pedidoProducto

alert ("Bienvenid@ a la librería");

const pedido = pedidoProducto ();

pedido.calcularSubTotal();
pedido.calcularEnvio();
pedido.calcularDescuento()
pedido.calcularTotal();

alert (`Detalle del pedido:

    ${pedido.producto} x ${pedido.cantidad} : $${pedido.precio * pedido.cantidad}
    Descuento 15%: $${pedido.calcularDescuento()}
    Costo de envío: $${pedido.envio}

    Total = $${pedido.total}
    `);