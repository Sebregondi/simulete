class Libro {
    constructor (titulo, precio, genero, stock){
        this.titulo = titulo;
        this.precio = Number(precio);
        this.genero = genero;
        this.stock = stock;
    }

    actualizarStock (cantidad) {
        this.stock = this.stock - cantidad;
    }
}

const arrayCatalogo = [];
arrayCatalogo.push (new Libro ("El aleph", 2049, "cuento", 15));
arrayCatalogo.push (new Libro ("Ficciones", 3099, "cuento", 12));
arrayCatalogo.push (new Libro ("Inquisiciones/Otras inquisiciones", 3799, "ensayo", 15));
arrayCatalogo.push (new Libro ("Historia de la eternidad", 2049, "cuentos", 11));
arrayCatalogo.push (new Libro ("La rosa profunda", 1999, "poesia", 11));
arrayCatalogo.push (new Libro ("La cifra", 1399, "poesia", 11));
console.log (arrayCatalogo);
