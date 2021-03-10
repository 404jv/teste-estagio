
exports.up = knex => knex.schema.createTable('projects', table => {
  table.increments('id');
  table.text('name').notNullable();

  table.specificType('navers', 'INT[]');
});

exports.down = knex => knex.schema.dropTable('projects');
