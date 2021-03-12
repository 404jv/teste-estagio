/* E10
Para o seguinte exercício, considere os array de objetos.

const movies = [
	{ id: 1, name: 'Joker' },
	{ id: 2, name: 'Parasite' },
	{ id: 3, name: 'Avengers' },
	{ id: 4, name: 'Her' }
]
const actors = [
	{ id: 1, name: 'Cho Yeo-jeong', movie_ids: [2] },
	{ id: 2, name: 'Robert Downey Jr.', movie_ids: [3] },
	{ id: 3, name: 'Joaquin Phoenix', movie_ids: [1, 4] },
	{ id: 4, name: 'Scarlett Johansson', movie_ids: [3] }
]

Faça uma função que receba 2 parâmetros: um array de movies e um array de actors.
 A função deve retornar um array de movies, onde cada movie possui a propriedade actors, que sera um array com os nomes dos atores. Por ex:

[
	{
		id: 99,
		name: 'Lorem Ipsum',
		actors: ['John Doe', 'Jane Doe']
	}
]

 */

window.exercise10 = function () {
  const movies = [
    { id: 1, name: "Joker" },
    { id: 2, name: "Parasite" },
    { id: 3, name: "Avengers" },
    { id: 4, name: "Her" }
  ];
  const actors = [
    { id: 1, name: "Cho Yeo-jeong", movie_ids: [2] },
    { id: 2, name: "Robert Downey Jr.", movie_ids: [3] },
    { id: 3, name: "Joaquin Phoenix", movie_ids: [1, 4] },
    { id: 4, name: "Scarlett Johansson", movie_ids: [3] }
  ];

  const array = movies_and_actors(movies, actors);

  console.log("resultado ex10: ");
  array.map((user) => console.log(user));
};

function movies_and_actors(movies, actors) {
  let movies_and_actors = movies.map((movie) => {
    return {
      id: movie.id,
      name: movie.name,
      actors: []
    };
  });

  for (let i in movies_and_actors) {
    const movie_actor = movies_and_actors[i];

    for (let j in actors) {
      const actor = actors[j];

      for (let x in actor.movie_ids) {
        const movieId = actor.movie_ids[x];

        if (movieId === movie_actor.id)
          movies_and_actors[i].actors.push(actor.name);
      }
    }
  }

  return movies_and_actors;
}
