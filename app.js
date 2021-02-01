const SwaggerExpress = require("swagger-express-mw");
const app = require("express")();

const config = {
  appRoot: __dirname,
};

SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) {
    throw err;
  }

  swaggerExpress.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port);
  console.log(`try this:\ncurl http://127.0.0.1:${port}/hello?name=Josh`);
});
