require('express-async-errors');

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Jobs Api</h1>')
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;