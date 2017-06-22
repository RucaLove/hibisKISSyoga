'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/yogapp'
  },

  // test: {
  //   client: 'pg',
  //   connection: 'postgres://localhost/_test'
  // },

  production: {
    client:'pg',
    connection:process.env.DATABASE_URL
  }
};
