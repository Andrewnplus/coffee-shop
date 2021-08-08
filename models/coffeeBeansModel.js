const mongoose = require('mongoose');

const coffeeBeansSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A coffee bean must have a name'],
      unique: true,
      trim: true
    },
    origin: {
      type: String,
      trim: true
    },
    manor: {
      type: String,
      trim: true
    },
    treatment: {
      type: String,
      trim: true
    },
    elevation: {
      type: Number,
      default: 0,
      min: [0, 'Elevation must be above 1.0'],
      max: [8000, 'Elevation must be below 8000']
    },
    flavour: {
      type: String,
      trim: true
    },
    weight: {
      type: Number,
      default: 0,
      min: [0, 'Weight must be above 1.0']
    },
    price: {
      type: Number,
      required: [true, 'A coffee bean must have a price'],
      default: 0,
      min: [0, 'Price must be above 0']
    },
    summary: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// QUERY MIDDLEWARE
coffeeBeansSchema.pre(/^find/, function(next) {
  this.start = Date.now();
  next();
});

coffeeBeansSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

const coffeeBeans = mongoose.model('coffeeBeans', coffeeBeansSchema);

module.exports = coffeeBeans;
