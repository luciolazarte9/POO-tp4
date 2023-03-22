/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción,
ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */

class cuenta {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
    ingresar(cantidad) { this.saldo += cantidad; document.write(`Se ingreso $${this.saldo}<br>`) }
    extraer(cantidad) { this.saldo -= cantidad; document.write(`Se extrajo $${this.saldo}<br>`) }
    informar() { document.write(`Titular: ${this.titular}<br>Saldo: ${this.saldo}<br>`) }
  }

  const persona = new cuenta ('Alex', 0)

  persona.informar();
  persona.ingresar(1000);
  persona.extraer(500);
  persona.informar();