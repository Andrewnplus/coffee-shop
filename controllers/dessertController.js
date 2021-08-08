const Dessert = require('./../models/dessertModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllDessert = async (req, res) => {
  try {
    const features = new APIFeatures(Dessert.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const dessert = await features.query;

    res.status(200).json({
      status: 'success',
      results: dessert.length,
      data: {
        dessert
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getDessert = async (req, res) => {
  try {
    const dessert = await Dessert.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        dessert
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createDessert = async (req, res) => {
  try {
    const newDessert = await Dessert.create(req.body);
    console.log('here');
    res.status(201).json({
      status: 'success',
      data: {
        dessert: newDessert
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateDessert = async (req, res) => {
  try {
    const dessert = await Dessert.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        dessert
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteDessert = async (req, res) => {
  try {
    await Dessert.findByIdAndDelete(req.params.id);

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