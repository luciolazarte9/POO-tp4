const opciones = ["piedra", "papel", "tijera"];
const ganaCon = [["tijera", "piedra"], ["piedra", "papel"], ["papel", "tijera"]];

function jugar() {
  const usuario = prompt("Elegi piedra, papel o tijera").toLowerCase();
  const computadora = opciones[Math.floor(Math.random() * opciones.length)];
  const resultado = usuario === computadora ? "Empate" : ganaCon.some(par => par[0] === usuario && par[1] === computadora) ? "Usuario" : "Computadora";
  alert(`La computadora eligio ${computadora}. ${resultado} gana!!!`);
  return prompt("Queres jugar de nuevo?").toLowerCase() === "si" ? jugar() : null;
}

jugar();
