class producto {
    constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      document.write(`Codigo: ${this.id}<br>`);
      document.write(`Nombre: ${this.nombre}<br>`);
      document.write(`Precio: $${this.precio}<br>`);
    }
  }
  
  const productos = [
    new producto(0001, 'Dulce de leche', 500),
    new producto(0002, 'Coca-cola', 250),
    new producto(0003, 'Alfajor de maicena', 99),
  ];
  
  productos.forEach(producto => producto.imprimeDatos());
  