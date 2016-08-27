const router = require('express').Router()
const getCategories = require('./categories/getCategories')
const getCategoryById = require('./categories/getCategoryById')

router.get('', (req, res) => {
  getCategories().then(categories => res.json(categories))
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  getCategoryById(id).then(category => res.json(category))
})

module.exports = router
