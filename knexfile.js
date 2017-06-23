'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/hibiskiss'
  },

  // test: {
  //   client: 'pg',
  //   connection: 'postgres://localhost/hibiskiss_test'
  // },

  production: {
    client:'pg',
    connection:process.env.DATABASE_URL
  }
};
