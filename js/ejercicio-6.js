class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this.#ISBN = ISBN;
      this.#titulo = titulo;
      this.#autor = autor;
      this.#numPaginas = numPaginas;
    }
  
    // Métodos getters y setters
    get ISBN() {
      return this.#ISBN;
    }
  
    set ISBN(valor) {
      this.#ISBN = valor;
    }
  
    get titulo() {
      return this.#titulo;
    }
  
    set titulo(valor) {
      this.#titulo = valor;
    }
  
    get autor() {
      return this.#autor;
    }
  
    set autor(valor) {
      this.#autor = valor;
    }
  
    get numPaginas() {
      return this.#numPaginas;
    }
  
    set numPaginas(valor) {
      this.#numPaginas = valor;
    }
  
    // Método para mostrar la información del libro
    mostrarLibro() {
      document.write(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`);
    }
  }
  
  // Ejemplo de uso de la clase Libro
  const libro1 = new Libro('978-84-670-5786-1', 'Cien años de soledad', 'Gabriel García Márquez', 468);
  const libro2 = new Libro('978-987-580-655-5', 'El Aleph', 'Jorge Luis Borges', 224);
  
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  // Determinar cuál de los dos libros tiene más páginas
  if (libro1.numPaginas > libro2.numPaginas) {
    document.write(`${libro1.titulo} tiene más páginas que ${libro2.titulo}.`);
  } else if (libro2.numPaginas > libro1.numPaginas) {
    document.write(`${libro2.titulo} tiene más páginas que ${libro1.titulo}.`);
  } else {
    document.write(`${libro1.titulo} y ${libro2.titulo} tienen la misma cantidad de páginas.`);
  }
  