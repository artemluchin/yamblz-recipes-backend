const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const DB = 'database/database.json';

app.use(express.static(path.join(__dirname, 'database')));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));

app.get('/recipes/:id', (req, res) => {
	const recipeId = req.params.id;

	fs.readFile(DB, 'utf-8', (err, data) => {
    if (err) throw err;

    const recipes = JSON.parse(data);
		const recipe = recipes.filter(recipe => recipe.id === Number(recipeId))[0];

    res.json(recipe);
  });
});

app.listen(app.get('port'), () => {
	console.log("App is listening on port ", app.get('port'));
});
