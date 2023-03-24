class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
  
  equals(contacto) {
    return this.nombre === contacto.nombre;
  }
}

class Agenda {
  constructor(capacidad = 10) {
    this.capacidad = capacidad;
    this.contactos = [];
  }
  
