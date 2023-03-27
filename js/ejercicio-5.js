/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece 
la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

Generacion Z: 1994 - 2010
Generacion milenials: 1981 - 1993
Generacion X: 1969 - 1980
Generacion Baby boom: 1949 - 1968
Generacion Silent: 1930 - 1948

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor 
de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

 */


class Persona1 {
    constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.añoNacimiento = añoNacimiento;
    }
  
    mostrarGeneracion() {
      let generacion = "";
      if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
        generacion = "Generación Z";
        document.write(`La persona pertenece a la ${generacion}. El rasgo caracteristico de esta generacion es la expansion masiva del internet.<br>`);
      } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
        generacion = "Generación millennial";
        document.write(`La persona pertenece a la ${generacion}. El rasgo caracteristico de esta generacion es el inicio de la digitalizacion.<br>`);
      } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
        generacion = "Generación X";
        document.write(`La persona pertenece a la ${generacion}. El rasgo caracteristico de esta generacion es la crisis del 73 y transicion española.<br>`);
      } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
        generacion = "Generación Baby boom";
        document.write(`La persona pertenece a la ${generacion}. El rasgo caracteristico de esta generacion es la paz y la explosion demografica.<br>`);
      } else if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
        generacion = "Generación Silent";
        document.write(`La persona pertenece a la ${generacion}. El rasgo caracteristico de esta generacion son los conflictos belicos.<br>`);
      } else {
        document.write("Año de nacimiento invalido");
      }
    }
  
    esMayorDeEdad() {
      if (this.edad >= 18) {
        document.write(`${this.nombre} es mayor de edad.<br>`);
      } else {
        document.write(`${this.nombre} no es mayor de edad.<br>`);
      }
    }
  
    mostrarDatos() {
      document.write(`Nombre: ${this.nombre}<br>`);
      document.write(`Edad: ${this.edad}<br>`);
      document.write(`DNI: ${this.dni}<br>`);
      document.write(`Sexo: ${this.sexo}<br>`);
      document.write(`Peso: ${this.peso}<br>`);
      document.write(`Altura: ${this.altura}<br>`);
      document.write(`Año de nacimiento: ${this.añoNacimiento}<br>`);
    }
  
    generaDNI() {
      const randomNum = Math.floor(Math.random() * (99999999 - 10000000)) + 10000000;
      this.dni = randomNum;
      document.write(`Nuevo DNI generado: ${this.dni}`);
    }
  }
  
const persona = new Persona1('Lucio', 22, 12345678, 'H', 69, 167, 2000);
persona.mostrarGeneracion();
persona.esMayorDeEdad();
persona.mostrarDatos();
