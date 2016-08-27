const router = require('express').Router()
const recipes = require('./recipes')
const categories = require('./categories')

router.use('/recipes', recipes)
router.use('/categories', categories)

module.exports = router
