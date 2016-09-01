const mongoose = require('mongoose')
const Recipes = mongoose.model('recipes')
const Categories = mongoose.model('categories')
const Products = mongoose.model('products')

const getResults = (query) => {
  const recipes =  new Promise((res, rej) => {
    Recipes.find().exec((err, recipes) => {
      if (err) return rej(err)
      return res({recipes: recipes})
    })
  })
  const categories =  new Promise((res, rej) => {
    Categories.find().exec((err, categories) => {
      if (err) return rej(err)
      return res({categories: categories})
    })
  })
  const products =  new Promise((res, rej) => {
    Products.find().exec((err, products) => {
      if (err) return rej(err)
      return res({products: products})
    })
  })
	return Promise.all([recipes, products, categories])
}

module.exports = getResults
