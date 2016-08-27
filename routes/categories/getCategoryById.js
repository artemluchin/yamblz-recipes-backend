const mongoose = require('mongoose')
const Categories = mongoose.model('categories')

const getCategoryById = id => {
  return new Promise((res, rej) => {
    Categories.findById(id).populate('recipes').exec((err, category) => {
      if (err) return rej(err)
      return res(category)
    })
  })
}

module.exports = getCategoryById
