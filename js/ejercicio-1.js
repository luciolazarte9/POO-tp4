/*1- Crea un objeto llamado auto que tenga algunas características como:
 el color, marca, modelo y si está encendido o apagado.
  Crea los métodos necesarios para permitir encender y apagar el auto.
 */

class auto {
  constructor(marca, modelo, color){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }
  encender(){
    document.write(`<p>El auto ${this.marca} ${this.modelo} ${this.color} fue encendido.</p>`)
  }
  apagar(){
    document.write(`<p>El auto ${this.marca} ${this.modelo} ${this.color} se apago.</p>`)
  }
}

const toyota = new auto ('Toyota', 'Corolla', 'Azul marino');

toyota.encender();
toyota.apagar();