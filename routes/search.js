const router = require('express').Router()
const getResults = require('./search/getResults')

router.get('', (req, res) => {
	const query = req.query.q
  getResults(query).then(results => {
		if (results.length === 0) res.json({recipes: [], categories: [], products: []})
		var result = {}
		results.forEach(item => result = Object.assign(result, item))
		res.json(result)
	})
});

module.exports = router
