const router = require('express').Router()
const getProducts = require('./products/getProducts')
const getProductById = require('./products/getProductById')

router.get('', (req ,res) => {
  getProducts().then(products => res.json(products))
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  getProductById(id).then(product => res.json(product))
});

module.exports = router
