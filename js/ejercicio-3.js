class rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    // Métodos para modificar y mostrar las propiedades del rectángulo
    setAlto(alto) { this.alto = alto; }
    setAncho(ancho) { this.ancho = ancho; }
    getAlto() { return this.alto; }
    getAncho() { return this.ancho; }
  
    // Métodos para calcular el perímetro y el área del rectángulo
    calcularPerimetro() { return 2 * (this.alto + this.ancho); }
    calcularArea() { return this.alto * this.ancho; }
  
    // Método para mostrar los datos del rectángulo
    mostrarDatos() {
      document.write(`Rectángulo de alto ${this.alto} y ancho ${this.ancho}<br>`);
      document.write(`Perímetro: ${this.calcularPerimetro()}<br>`);
      document.write(`Área: ${this.calcularArea()}<br>`);
    }
  }
  
  // Ejemplo de uso de la clase Rectangulo
  const miRectangulo = new rectangulo(5, 10);
  miRectangulo.mostrarDatos();
  
  // Modificar las propiedades del rectángulo
  miRectangulo.setAlto(8);
  miRectangulo.setAncho(6);
  miRectangulo.mostrarDatos();
  