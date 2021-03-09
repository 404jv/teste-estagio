
exports.seed = function(knex) {
  return knex('navers').del()
    .then(() => {
      return knex('navers').insert([
        {
          name: 'Fulano', 
          birthdate: new Date(1998-06-12), 
          admission_date: new Date(2020-06-12),
          job_role: 'Desenvolvedor'
        },

        {
          name: 'Ciclano', 
          birthdate: new Date(1998-06-12), 
          admission_date: new Date(2018-06-12), 
          job_role: 'Desenvolvedor'
        }
      ]);
    });
};
