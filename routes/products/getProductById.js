const mongoose = require('mongoose')
const Products = mongoose.model('products')

const getProductById = (id) => {
  return new Promise((res, rej) => {
    Products.findById(id).exec((err, product) => {
      if (err) return rej(err)
      return res(product)
    })
  })
}

module.exports = getProductById
