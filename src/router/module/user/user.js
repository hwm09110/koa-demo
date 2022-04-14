const { sequelize, models } = require('../../../db');

var getUser = async (ctx, next) => {
  var cid = ctx.query.cid;
  console.log(cid);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const [results] = await models.users.findAll();
    ctx.response.body = {
      list: results ? results : [],
      code: 200
    };
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  next();
};

module.exports = {
  'GET /getUser': getUser
};
