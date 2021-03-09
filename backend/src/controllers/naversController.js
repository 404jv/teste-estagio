const knex = require('../database');

module.exports = {
  async index (req, res) {
    const navers = await knex('navers');

    return res.json(navers);
  }
}
