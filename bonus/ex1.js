module.exports = {
  create(knex) {
    knex.schema.createTable('projects', table => {
      table.increments('id');
      table.text('name').notNullable();
    
      table.specificType('navers', 'INT[]');
    });

    knex.schema.createTable('navers', table => {
      table.increments('id');
      table.text('name').notNullable();
      table.date('birthdate').notNullable();
      table.date('admission_date').notNullable();
      table.text('job_role').notNullable();
  
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    });
  },

  drop(knex) {
    knex.schema.dropTable('projects');
    knex.schema.dropTable('navers');
  }
}