const mongoose = require('mongoose')
const Products = mongoose.model('products')

const getProductVersion = (id) => {
  return new Promise((res, rej) => {
    Products.findById(id).select('updatedAt').exec((err, product) => {
      if (err) return rej(err)
      return res(product)
    })
  })
}

module.exports = getProductVersion
