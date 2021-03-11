const knex = require('../database');

module.exports = {
  async index(req, res, next) {
    try {
      const projects = await knex('projects').select('projects.id', 'projects.name');


      return res.json(projects);
    } catch (error) {
      next(error);
    }
  },

  async show(req, res, next) {
    try {
      const { project_id } = req.query;

      const project = await knex('projects')
        .where({ id: project_id })
        .first();

      const navers = await knex('navers')
        .whereIn('id', project.navers);


      return res.json({
        id: project.id,
        name: project.name,
        navers
      });
    } catch (error) {
      next(error);
    }
  
  },

}