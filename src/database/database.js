import Sequelize from 'sequelize'

export const sequelize = new Sequelize('ppldtepe', 'ppl', 'ppl123', {
    logging: function (str) {
      // do your own logging
      console.log(str)
    },
    host: 'localhost',
    dialect: 'postgres'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });