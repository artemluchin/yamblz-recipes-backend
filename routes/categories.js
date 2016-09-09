const router = require('express').Router()
const getCategories = require('./categories/getCategories')
const getCategoryById = require('./categories/getCategoryById')
const getCategoryForSwiper = require('./categories/getCategoryForSwiper')

router.get('', (req, res) => {
  getCategories().then(categories => res.json(categories))
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  getCategoryById(id).then(category => res.json(category))
})

router.get('/swiper/:id', (req, res) => {
	const id = req.params.id
	getCategoryForSwiper(id).then(category => res.json(category))
})

module.exports = router
