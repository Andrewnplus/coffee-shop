const CoffeeBeans = require('./../models/coffeeBeansModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllCoffeeBeans = async (req, res) => {
  try {
    const features = new APIFeatures(CoffeeBeans.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const coffeeBeans = await features.query;

    res.status(200).json({
      status: 'success',
      results: coffeeBeans.length,
      data: {
        coffeeBeans
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getCoffeeBeans = async (req, res) => {
  try {
    const coffeeBeans = await CoffeeBeans.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        coffeeBeans
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createCoffeeBeans = async (req, res) => {
  try {
    const newCoffeeBeans = await CoffeeBeans.create(req.body);
    console.log('here');
    res.status(201).json({
      status: 'success',
      data: {
        coffeeBeans: newCoffeeBeans
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateCoffeeBeans = async (req, res) => {
  try {
    const coffeeBeans = await CoffeeBeans.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      status: 'success',
      data: {
        coffeeBeans
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteCoffeeBeans = async (req, res) => {
  try {
    await CoffeeBeans.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};