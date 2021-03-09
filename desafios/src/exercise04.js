/* E4
 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada,
 imprima o seu endereço no formato `‘ENDERECO, NUMERO, CIDADE/ESTADO’`.
 Utilize a fetch API (https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) para realizar a requisição.
*/

window.exercise04 = function () {
  const request = "https://viacep.com.br/ws/87360000/json/";

  fetch(request)
    .then((res) => {
      res.json().then((data) => {
        console.log(
          `resultado ex4: Av. Dos Ipês, 123, ${data.localidade}/${data.uf}`
        );
      });
    })
    .catch((err) => console.log(err));
};
