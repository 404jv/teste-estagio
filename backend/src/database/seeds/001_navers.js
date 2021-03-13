
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
        },

        {
          name: 'João Victor', 
          birthdate: new Date(2004-01-15), 
          admission_date: new Date(2021-03-14), 
          job_role: 'Desenvolvedor'
        }
      ]);
    });
};
