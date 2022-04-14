const config = require('../config/db');
const { Sequelize } = require('sequelize');
const initModels = require('./models/init-models');

const sequelize = new Sequelize(config.dbname, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  logging: console.log
});

module.exports = {
  sequelize,
  models: initModels(sequelize)
};
