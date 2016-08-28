const router = require('express').Router()
const recipes = require('./recipes')
const categories = require('./categories')
const products = require('./products')

router.use('/recipes', recipes)
router.use('/categories', categories)
router.use('/products', products)

module.exports = router
