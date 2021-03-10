const knex = require('../database');

module.exports = {
  async index(req, res, next) {
    try {
      const navers = await knex('navers');

      return res.json(navers);
    } catch (error) {
        next(error);
    }
  },

  async store(req, res, next) {
    try {
      const { name, birthdate, admission_date, job_role, projects } = req.body;

      await knex('navers').insert({
        name, 
        birthdate, 
        admission_date, 
        job_role, 
      });
      
      const naverId = await knex('navers')
        .where({ name })
        .select('id')
        .first();

      const naverProjects = await knex('projects').whereIn('id', projects);

      for (i in naverProjects) {
        naverProjects[i].navers.push(naverId.id);

        await knex('projects')
          .update({ navers: naverProjects[i].navers })
          .where('id', naverProjects[i].id);
      }

      return res.json({
        name, 
        birthdate, 
        admission_date, 
        job_role, 
        projects,
      });
    } catch (error) {
        next(error);
    }
  }
}
