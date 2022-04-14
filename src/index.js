const Koa = require('koa');

const bodyParser = require('koa-bodyparser');
const router = require('./router');

const app = new Koa();

app.use(bodyParser());
app.use(router());

app.listen(3000, () => {
  console.log('server start on 127.0.0.1:3000');
});
