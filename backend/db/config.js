const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-commerce", (err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB successfully!');
  }
});