const Router = require('koa-router');
const fs = require('fs');
const { join } = require('path');
const modulePath = __dirname + '/module';

const router = Router();

function registerRouter() {
  const files = findSync(modulePath);
  console.log(files);

  for (const file of files) {
    const mapping = require(file);
    console.log(mapping);
    addRouteMapping(router, mapping);
  }
  return router.routes();
}

function findSync(startPath) {
  let result = [];

  function finder(path) {
    let files = fs.readdirSync(path);

    files.forEach((val) => {
      let fPath = join(path, val);

      let stats = fs.statSync(fPath);

      if (stats.isDirectory()) finder(fPath);

      if (stats.isFile()) result.push(fPath);
    });
  }

  finder(startPath);

  return result;
}

function addRouteMapping(router, routeMap) {
  for (var url in routeMap) {
    if (url.startsWith('GET ')) {
      var path = url.substring(4);
      router.get(path, routeMap[url]);
      console.log(`register URL routeMap: GET ${path}`);
    } else if (url.startsWith('POST ')) {
      var path = url.substring(5);
      router.post(path, routeMap[url]);
      console.log(`register URL routeMap: POST ${path}`);
    } else {
      console.log(`invalid URL: ${url}`);
    }
  }
}

module.exports = registerRouter;
