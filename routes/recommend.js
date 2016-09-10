const router = require('express').Router()
const getRandomRecipes = require('./recommend/getRandomRecipes')

router.get('', (req, res) => {
	getRandomRecipes().then(recipes => res.json(recipes))
})

module.exports = router
