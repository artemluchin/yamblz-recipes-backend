const router = require('express').Router()
const getResults = require('./search/getResults')

router.get('', (req, res) => {
	const query = req.query.q
	console.log(query)
  getResults(query).then(results => {
		var result = {}
		results.forEach(item => result = Object.assign(result, item))
		res.json(result)
	})
});

module.exports = router
