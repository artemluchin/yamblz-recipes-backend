'use strict'

const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const MongoClient = mongo.MongoClient;
const url = 'mongodb://admin:kitchen2016@ds063715.mlab.com:63715/kitchen';

const Schema = mongoose.Schema;

app.use(express.static(path.join(__dirname, 'database')));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect(url);

const recipesSchema = ({
  id: Number,
  title: String,
  image: String,
  cookingTime: Number,
  kcal: Number,
  complexity: String,
  category: Number,
  stages: [{
    title: String,
    image: String,
    steps: [String]
  }]
});

const categoriesSchema = ({
  id: Number,
  title: String,
  recipes: [{
    type: Schema.Types.ObjectId,
    ref: 'recipes'
  }]
})

const Recipe = mongoose.model('recipes', recipesSchema);
const Category = mongoose.model('categories', categoriesSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to DB');
});

app.get('/recipes/:id', (req, res) => {
  const recipeId = req.params.id;

  Recipe.find({id: recipeId}).exec((err, recipe) => {
    if (err) throw err;
    res.json(recipe[0]);
  })
})

app.get('/categories', (req, res) => {
  const query = req.query.ids;
  if (!query) {
    Category
      .find()
      .populate('recipes')
      .exec((err, categories) => {
        if (err) throw err;
        res.json(categories)
      })
  }
  else {
    const categoriesIds = query.split(',');

    Category
      .find({id: { $in: categoriesIds}})
      .populate('recipes')
      .exec((err, category) => {
        if (err) throw err;
        res.json(category);
      });
  }
});

app.listen(app.get('port'), () => {
  console.log('App is listening on port', app.get('port'));
})
