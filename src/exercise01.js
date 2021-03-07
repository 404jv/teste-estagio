/* E1
  Crie uma função que recebe duas strings
  e retorna a de maior comprimento.
*/

function maxString(string1, string2) {
  if (string1 > string2) return string1;

  if (string1 < string2) return string2;

  return "";
}

window.exercise01 = function () {
  console.log("resultado ex1: ", maxString("String maior", "String"));
  return "";
};
