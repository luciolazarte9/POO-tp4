class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  esIgual(contacto) {
    return this.nombre === contacto.nombre;
  }
}

class Agenda {
  constructor(tamaño = 10) {
    this.tamaño = tamaño;
    this.contactos = [];
  }

  añadirContacto(contacto) {
    if (this.agendaLlena()) {
      console.log('La agenda esta llena. No se puede agregar mas contactos.');
      return;
    }

    if (this.existeContacto(contacto)) {
      console.log(`El contacto ${contacto.nombre} ya existe en la agenda.`);
      return;
    }

    this.contactos.push(contacto);
    console.log(`Se ha agregado el contacto ${contacto.nombre} a la agenda.`);
  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.esIgual(contacto));
  }

  listarContactos() {
    if (this.contactos.length === 0) {
      console.log('La agenda esta vacia.');
      return;
    }

    console.log('Lista de contactos:');
    this.contactos.forEach((contacto) => {
      console.log(`- ${contacto.nombre}: ${contacto.telefono}`);
    });
  }

  buscarContacto(nombre) {
    const contacto = this.contactos.find((c) => c.nombre === nombre);

    if (contacto) {
      console.log(`El telefono de ${contacto.nombre} es ${contacto.telefono}.`);
    } else {
      console.log(`No se encontro un contacto con el nombre ${nombre}.`);
    }
  }

  eliminarContacto(contacto) {
    const index = this.contactos.findIndex((c) => c.esIgual(contacto));

    if (index !== -1) {
      this.contactos.splice(index, 1);
      console.log(`Se ha eliminado el contacto ${contacto.nombre} de la agenda.`);
    } else {
      console.log(`El contacto ${contacto.nombre} no existe en la agenda.`);
    }
  }

  agendaLlena() {
    return this.contactos.length === this.tamaño;
  }

  huecosLibres() {
    const huecos = this.tamaño - this.contactos.length;
    console.log(`La agenda tiene ${huecos} huecos libres.`);
  }
}

const miAgenda = new Agenda(10);


function mostrarMenu() {
return prompt(
  `Selecciona una opcion:
1. Añadir un contacto
2. Buscar un contacto
3. Eliminar un contacto
4. Mostrar la lista de contactos
5. Mostrar la cantidad de huecos libres en la agenda
6. Salir`
);
}

function ejecutarOpcion(opcion) {
switch (opcion) {
  case '1': {
    const nombre = prompt('Ingresa el nombre del contacto:');
    const telefono = prompt('Ingresa el telefono del contacto:');
    miAgenda.añadirContacto(new Contacto(nombre, telefono));
    break;
  }
  case '2': {
    const nombre = prompt('Ingresa el nombre del contacto a buscar:');
    miAgenda.buscarContacto(nombre);
    break;
  }
  case '3': {
    const nombre = prompt('Ingresa el nombre del contacto a eliminar:');
    const contacto = miAgenda.contactos.find((c) => c.nombre === nombre);
    if (contacto) {
      miAgenda.eliminarContacto(contacto);
    } else {
      console.log(`No se encontro un contacto con el nombre ${nombre}.`);
    }
    break;
  }
  case '4': {
    miAgenda.listarContactos();
    break;
  }
  case '5': {
    miAgenda.huecosLibres();
    break;
  }
  case '6': {
    console.log('Saliendo del programa.');
    return;
  }
  default: {
    console.log('Esta opcion es invalida.');
    break;
  }
}
}

// Bucle principal del que muestra el menu y ejecuta la opción seleccionada por el usuario
let opcion;
do {
opcion = mostrarMenu();
ejecutarOpcion(opcion);
} while (opcion !== '6');
