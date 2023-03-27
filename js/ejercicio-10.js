/*10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de 
aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un 
objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre 
de un avión y devolverá información en caso de encontrarlo, si no lo encontró 
indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, 
lista de pasajeros. Los aviones tienen el método abordar el cual permite que un 
pasajero suba al avión solo si hay capacidad disponible en el mismo, 
caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", 
crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones 
al aeropuerto, buscar un avión y usar el método abordar.
 */


class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
    
    agregarAvion(avion) {
      this.listaAviones.push(avion);
    }
    
    buscarAvion(nombreAvion) {
      const avionEncontrado = this.listaAviones.find(avion => avion.nombre === nombreAvion);
      
      if (avionEncontrado) {
        console.log(`Información del avion ${avionEncontrado.nombre}:`);
        console.log(`Capacidad: ${avionEncontrado.capacidad}`);
        console.log(`Destino: ${avionEncontrado.destino}`);
        console.log(`Lista de pasajeros: ${avionEncontrado.listaPasajeros}`);
      } else {
        console.log(`No se encontro el avion con nombre ${nombreAvion}`);
      }
    }
  }
  
  class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
    
    abordar(pasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        console.log(`El pasajero ${pasajero} ha abordado el avion ${this.nombre}`);
      } else {
        console.log(`El avion ${this.nombre} esta lleno. No se puede abordar.`);
      }
    }
  }
  
  // Crear un objeto de tipo Aeropuerto
  const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
  
  // Crear 3 objetos Avion con diferentes destinos y agregarlos al aeropuerto
  const avion = new Avion("Avión 1", 50, "Barcelona");
  const avion1 = new Avion("Avión 2", 60, "Miami");
  const avion2 = new Avion("Avión 3", 70, "Japon");
  
  aeropuertoInternacional.agregarAvion(avion);
  aeropuertoInternacional.agregarAvion(avion1);
  aeropuertoInternacional.agregarAvion(avion2);
  
  // Buscar un avión y abordar un pasajero
  aeropuertoInternacional.buscarAvion("Avion 2");
  
  avion2.abordar("Lucio");
  avion2.abordar("Melisa");
  avion2.abordar("Luciana");
  avion2.abordar("Analia");
  avion2.abordar("Gustavo");
  
  // Intentar abordar otro pasajero (no debe ser posible, ya que el avión está lleno)
  avion2.abordar("Carlos");
  