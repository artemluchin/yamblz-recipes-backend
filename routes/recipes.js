const router = require('express').Router()
const getRecipes = require('./recipes/getRecipes')
const getRecipeById = require('./recipes/getRecipeById')

router.get('', (req, res) => {
  getRecipes().then(recipes => res.json(recipes))
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  getRecipeById(id).then(recipe => res.json(recipe))
})

module.exports = router
