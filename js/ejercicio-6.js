class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this.#ISBN = ISBN;
      this.#titulo = titulo;
      this.#autor = autor;
      this.#numPaginas = numPaginas;
    }
  
    get #ISBN() {
      return this.ISBN;
    }
  
    set #ISBN(valor) {
      this.ISBN = valor;
    }
  
    get #titulo() {
      return this.titulo;
    }
  
    set #titulo(valor) {
      this.titulo = valor;
    }
  
    get #autor() {
      return this.autor;
    }
  
    set #autor(valor) {
      this.autor = valor;
    }
  
    get #numPaginas() {
      return this.numPaginas;
    }
  
    set #numPaginas(valor) {
      this.numPaginas = valor;
    }
  
    mostrarLibro() {
      document.write(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.<br>`);
    }
  }

  const libro1 = new Libro('978-84-670-5786-1', 'Omerta', 'Mario Puzzo', 468);
  const libro2 = new Libro('978-987-580-655-5', 'The Witcher', 'Autor2', 224);
  
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  if (libro1.numPaginas > libro2.numPaginas) {
    document.write(`${libro1.titulo} tiene mas paginas que ${libro2.titulo}.<br>`);
  } else if (libro2.numPaginas > libro1.numPaginas) {
    document.write(`${libro2.titulo} tiene mas paginas que ${libro1.titulo}.<br>`);
  } else {
    document.write(`${libro1.titulo} y ${libro2.titulo} tienen la misma cantidad de paginas.<br>`);
  }
  