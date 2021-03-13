const knex = require('../backend/src/database');

module.exports = {
  async delete() {
    await knex('projects').del();

    await knex('navers').del();
  },

  async insert() {
    await knex('navers').insert([
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

    await knex('projects').insert([
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
  }
}
