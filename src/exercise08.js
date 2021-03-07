/* E8
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Imprima todos os elementos em que a idade é menor que 30.

 */

window.exercise08 = function () {
  const users = [
    { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
    { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
    { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 },
    { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 }
  ];

  const newUsers = users.filter((user) => {
    if (user.age < 30) return true;

    return false;
  });

  console.log(`resultado ex8: `);
  newUsers.map((user) => console.log(user));
};
