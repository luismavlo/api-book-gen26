const express = require('express');
const cors = require('cors');
const globalErrorHandler = require('./controllers/error.controller');

//routes
const authorRouter = require('./routes/author.routes');

const app = express();

app.use(express.json());
app.use(cors());

//routes
app.use('/api/v1/authors', authorRouter);

app.use(globalErrorHandler);

module.exports = app;
