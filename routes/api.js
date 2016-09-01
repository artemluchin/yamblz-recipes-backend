const router = require('express').Router()
const recipes = require('./recipes')
const categories = require('./categories')
const products = require('./products')
const search = require('./search')

router.use('/recipes', recipes)
router.use('/categories', categories)
router.use('/products', products)
router.use('/search', search)

module.exports = router
