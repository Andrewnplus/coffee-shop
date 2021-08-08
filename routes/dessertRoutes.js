const express = require('express');
const dessertController = require('../controllers/dessertController');

const router = express.Router();

router
  .route('/')
  .get(dessertController.getAllDessert)
  .post(dessertController.createDessert);

router
  .route('/:id')
  .get(dessertController.getDessert)
  .patch(dessertController.updateDessert)
  .delete(dessertController.deleteDessert);

module.exports = router;
