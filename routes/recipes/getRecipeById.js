const mongoose = require('mongoose')
const Recipes = mongoose.model('recipes')

const getRecipeById = id => {
  return new Promise((res, rej) => {
    Recipes.findById(id).populate('ingredients.product').exec((err, recipe) => {
      if (err) return rej(err)
      return res(recipe)
    })
  })
}

module.exports = getRecipeById
