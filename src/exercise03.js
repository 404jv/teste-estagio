/* E3
  Dado o objeto `{4: ‘a’, 3: ‘e’, 1: ‘i’, 5: ‘s’}`,
  substitua os números na frase `‘T35t3 d3 35t4g1o’` conforme a sua respectiva letra
*/

window.exercise03 = function () {
  let string = "T35t3 d3 35t4g1o";

  let objeto = { 4: "a", 3: "e", 1: "i", 5: "s" };

  string = string.replace(/[1-5]/g, (c) => objeto[c]);

  console.log(`resultado ex3: ${string}`);
};
