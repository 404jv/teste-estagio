/* E2
  Dado a seguinte string `‘teste 1 de 2 string 3’`,
  substitua todas as ocorrências de números por `$`.
*/

window.exercise02 = function () {
  let string = "teste 1 de 2 string 3";

  string = string.replace(/[0-9]/g, "$");

  console.log(`resultado ex2: ${string}`);
};
