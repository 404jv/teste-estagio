
exports.seed = function(knex) {
  return knex('projects').del()
    .then(() => {
      return knex('projects').insert([
        {
          name: 'Projeto Bom',
          navers: [1]
        },
        {
          name: 'Bom',
          navers: [2, 3]
        },
        {
          name: 'Bem',
          navers: [3]
        },
      ]);
    });
};
