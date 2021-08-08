const express = require('express');
const coffeeBeansController = require('../controllers/coffeeBeansController');

const router = express.Router();

router
  .route('/')
  .get(coffeeBeansController.getAllCoffeeBeans)
  .post(coffeeBeansController.createCoffeeBeans);

router
  .route('/:id')
  .get(coffeeBeansController.getCoffeeBeans)
  .patch(coffeeBeansController.updateCoffeeBeans)
  .delete(coffeeBeansController.deleteCoffeeBeans);

module.exports = router;
