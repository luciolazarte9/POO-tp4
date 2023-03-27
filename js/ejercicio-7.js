class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  equals(contacto) {
    return this.nombre === contacto.nombre && this.telefono === contacto.telefono;
  }
}

class Agenda{
  constructor(tamano = 10) {
    this.contactos = [];
    this.tamano = tamano;
  }

  añadirContacto(contacto) {
    if (this.agendaLlena()) return console.log("Agenda llena, no se puede añadir el contacto.");
    if (this.existeContacto(contacto)) return console.log("Ya existe un contacto con ese nombre.");
    this.contactos.push(contacto);
    console.log("Contacto añadido correctamente.");
  }

  existeContacto(contacto) {
    return this.contactos.findIndex(c => c.nombre === contacto.nombre) !== -1;
  }
  

  listarContactos() {
    if (!this.contactos.length) return console.log("Agenda vacía.");
    console.log("Lista de contactos:");
    this.contactos.forEach(c => console.log(`- ${c.nombre}: ${c.telefono}`));
  }

  buscarContacto(nombre) {
    const contacto = this.contactos.find(c => c.nombre === nombre);
    if (contacto) console.log(`Teléfono de ${nombre}: ${contacto.telefono}`);
    else console.log(`No existe ningún contacto con el nombre ${nombre}.`);
  }

  eliminarContacto(contacto) {
    const index = this.contactos.findIndex(c => c.equals(contacto));
    if (index === -1) return console.log("No se ha encontrado el contacto en la agenda.");
    this.contactos.splice(index, 1);
    console.log("Contacto eliminado correctamente.");
  }

  agendaLlena() {
    return this.contactos.length === this.tamano;
  }

  huecosLibres() {
    console.log(`Hay ${this.tamano - this.contactos.length} huecos libres.`);
  }
}

function mostrarMenu() {
  const agenda = new Agenda(); // Se crea una instancia de la clase Agenda
  const opcion = prompt("Selecciona una opción: 1. Añadir contacto 2. Buscar contacto 3. Eliminar contacto 4. Listar contactos 5. Huecos libres 0. Salir");
  switch (opcion) {
    case "1":
      const nombre = prompt("Nombre del contacto: ");
      const telefono = prompt("Teléfono del contacto: ");
      const contacto = new Contacto(nombre, telefono);
      agenda.añadirContacto(contacto);
      mostrarMenu();
      break;
    case "2":
      const nombreBuscar = prompt("Nombre del contacto a buscar: ");
      agenda.buscarContacto(nombreBuscar);
      mostrarMenu();
      break;
    case "3":
      const nombreEliminar = prompt("Nombre del contacto a eliminar: ");
      const contactoEliminar = new Contacto(nombreEliminar, "");
      agenda.eliminarContacto(contactoEliminar);
      mostrarMenu();
      break;
    case "4":
      agenda.listarContactos();
      mostrarMenu();
      break;
    case "5":
      agenda.huecosLibres();
      mostrarMenu();
      break;
    case "0":
      console.log("Saliendo de la aplicación...");
      break;
    default:
      console.log("Opción no válida, por favor seleccione una opción válida.");
      mostrarMenu();
      break;
  }
}

mostrarMenu();
