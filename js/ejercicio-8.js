/*8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" 
y "profesión", y los métodos "saludar" y "despedirse". 
Luego, crea dos objetos de la clase "Persona" con diferentes valores 
para sus propiedades y llama a sus métodos "saludar" y "despedirse". */

class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    saludar() {
        document.write(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}<br>`);
    }

    despedirse(){
        document.write(`Soy ${this.nombre} y me despido.<br>`);
    }
}




const persona = new Persona ('Lucio', 22, 'Programador');
const persona1 = new Persona('Melisa', 21, 'Terapista ocupacional');

persona.saludar();
persona1.saludar();

persona.despedirse();
persona1.despedirse();