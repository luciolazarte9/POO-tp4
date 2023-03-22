class producto {
    constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    // Método para imprimir los datos del producto en la consola
    imprimeDatos() {
      document.write(`Código: ${this.id}<br>`);
      document.write(`Nombre: ${this.nombre}<br>`);
      document.write(`Precio: $${this.precio}<br>`);
    }
  }
  
  // Crear tres instancias de la clase Producto y guardarlas en un array
  const productos = [
    new producto(0001, 'Dulce de leche', 500),
    new producto(0002, 'Coca-cola', 250),
    new producto(0003, 'Alfajor de maicena', 99),
  ];
  
  // Imprimir los datos de los productos en la consola
  productos.forEach(producto => producto.imprimeDatos());
  