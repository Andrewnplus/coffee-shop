const express = require('express');
const morgan = require('morgan');

const coffeeBeansRouter = require('./routes/coffeeBeansRoutes');
const dessertRouter = require('./routes/dessertRoutes');

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use('/api/v1/products/beans', coffeeBeansRouter);
app.use('/api/v1/products/dessert', dessertRouter);

module.exports = app;
