const mongoose = require('mongoose')
const Categories = mongoose.model('categories')
const Recipes = mongoose.model('recipes')

const getCategoryForSwiper = id => {
  return new Promise((res, rej) => {
    Recipes.findRandom({categories: { $in: [id] }}, {stages: 0, ingredients: 0, categories: 0}, {limit: 3}, (err, recipes) => {
      if (err) return rej(err)
      return res(recipes)
    })
  })
}

module.exports = getCategoryForSwiper
