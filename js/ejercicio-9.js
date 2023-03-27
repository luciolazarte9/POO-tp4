/*Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", 
y el método "emitirSonido". 
Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y 
tengan su propio método "emitirSonido". Finalmente, crea dos objetos, 
uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos 
"emitirSonido" para verificar que cada animal emite el sonido adecuado */

class Animal {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido(){
        document.write(`El ${this.nombre} de ${this.edad} esta emitiendo sonido.`);
    }
}

class Mono extends Animal {
    emitirSonido(){
        document.write(`El mono ${this.nombre} hace:<br>`);
        document.write('Uuhhh Uuhh, Aahh Aahh!<br>');
    }
}

class Perro extends Animal {
    emitirSonido(){
        document.write(`El perro ${this.nombre} hace:<br>`);
        document.write('Guaaau! Guaaau!');
    }
}

const mono = new Mono ('Banana', 2);
const perro = new Perro ('Tobias', 1);

mono.emitirSonido();
perro.emitirSonido();