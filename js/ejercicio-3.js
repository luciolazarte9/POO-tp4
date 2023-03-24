class rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    setAlto(alto) { this.alto = alto; }
    setAncho(ancho) { this.ancho = ancho; }
    getAlto() { return this.alto; }
    getAncho() { return this.ancho; }
  
    calcularPerimetro() { return 2 * (this.alto + this.ancho); }
    calcularArea() { return this.alto * this.ancho; }
  
    mostrarDatos() {
      document.write(`Rectangulo de alto ${this.alto} y ancho ${this.ancho}<br>`);
      document.write(`Perímetro: ${this.calcularPerimetro()}<br>`);
      document.write(`Área: ${this.calcularArea()}<br>`);
    }
  }
  
  const miRectangulo = new rectangulo(5, 10);
  miRectangulo.mostrarDatos();
  
  miRectangulo.setAlto(8);
  miRectangulo.setAncho(6);
  miRectangulo.mostrarDatos();
  