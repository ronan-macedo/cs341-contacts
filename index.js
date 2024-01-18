const express = require('express');
const bodyParser = require('body-parser');
const initinitializeDb = require('./database/connection').initializeDb;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT || 5500;

initinitializeDb((error) => {
  if (error) {
    console.log(error);
    process.exit(1);
  } else {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
      .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();        
      })
      .use(bodyParser.json())
      .use('/', require('./routes'));

    app.listen(port, () => {
      console.log('Database connected and HTTP server is running.');
    });
  }
});