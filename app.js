const express = require('express');
const app = express();
const applicationRoute = require('./Routes/applicantRoute');
const CustomError = require('./Utils/customError');
const globalErrorHandler = require('./Controllers/errorController');

app.use(express.json());
app.use('/', applicationRoute);

app.all('*', (req, res, next) => {
    const error = new CustomError(`Page ${req.url} not found`, 404);
    return next(error);
});

app.use(globalErrorHandler);

module.exports = app;
