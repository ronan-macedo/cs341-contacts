const express = require('express');
const bodyParser = require('body-parser');
const initinitializeDb = require('./database/connection').initializeDb;

const app = express();
const port = process.env.PORT || 5500;

initinitializeDb((error) => {
  if (error) {
    console.log(error);
    process.exit(1);
  } else {
    app.use(bodyParser.json());
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    app.use('/contact', require('./routes'));
    app.listen(port, () => {
      console.log(`Database connected and server is running on port: ${port}`);
    });
  }
});