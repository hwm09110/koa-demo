const login = async (ctx, next) => {
  await next();
  const { name, pwd } = ctx.request.body;
  if (pwd && pwd == 123456) {
    ctx.response.body = {
      message: '登录成功',
      user: {
        name
      }
    };
  } else {
    ctx.response.body = {
      message: '密码错误'
    };
  }
};

module.exports = {
  'POST /login': login
};
