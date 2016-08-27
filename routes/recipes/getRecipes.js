const mongoose = require('mongoose')
const Recipes = mongoose.model('recipes')

const getRecipes = () => {
  return new Promise((res, rej) => {
    Recipes.find().exec((err, recipes) => {
      if (err) return rej('Error!')
      return res(recipes)
    })
  })
}

module.exports = getRecipes
