const mongoose = require('mongoose');

const dessertSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A coffee bean must have a name'],
      unique: true,
      trim: true
    },
    size: {
      type: String,
      trim: true
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
dessertSchema.pre(/^find/, function(next) {
  this.start = Date.now();
  next();
});

dessertSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

const dessert = mongoose.model('dessert', dessertSchema);

module.exports = dessert;
