import message from "./message_01.js";

function contarPalabras(message) {
  let result = "";
  const datosPalabras = {};
  const arrayPalabras = message.split(" ");
  for (const palabra of arrayPalabras) {
    if (datosPalabras[palabra] === undefined) {
      datosPalabras[palabra] = 1;
    } else {
      datosPalabras[palabra]++;
    }
  }
  for (const key in datosPalabras) {
    result += `${key}${datosPalabras[key]}`;
  }
  return result;
}

console.log(contarPalabras(message));
