const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipesSchema = mongoose.Schema({
  title: String,
  image: String,
  time: Number,
  energy: Number,
  complexity: String,
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'categories'
  }],
  ingredients: [{
    _id: false,
    product: {
      type: Schema.Types.ObjectId,
      ref: 'products'
    },
    amount: Number
  }],
  stages: [{
    _id: false,
    title: String,
    image: String,
    steps: [String]
  }]
});

const categoriesSchema = mongoose.Schema({
  title: String,
  recipes: [{
    type: Schema.Types.ObjectId,
    ref: 'recipes'
  }]
});

const productsSchema = mongoose.Schema({
  title: String,
  defaultMeasure: String,
  alternatives: [{
    type: Schema.Types.ObjectId,
    ref: 'products'
  }]
})

mongoose.model('recipes', recipesSchema);
mongoose.model('categories', categoriesSchema);
mongoose.model('products', productsSchema);
