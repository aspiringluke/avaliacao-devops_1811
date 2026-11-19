const knex = require('knex')({
        client: 'mysql2',
        connection: {
        host: "192.168.122.?",
        port: 3306,
        user: "root",
        password: "senha123",
        database: "produtos",
    },
  });

module.exports = knex;