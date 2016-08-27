'use strict'

const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const url = 'mongodb://admin:kitchen2016@ds063715.mlab.com:63715/kitchen';

require('./models/models')

app.use(express.static(path.join(__dirname, 'database')));
app.use(bodyParser.json());
app.use('', require('./routes/api'));

app.set('port', (process.env.PORT || 3000));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect(url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to DB');
});

app.listen(app.get('port'), () => {
  console.log('App is listening on port', app.get('port'));
})
