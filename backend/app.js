// ajout du framework express  nous permettant de déployer nos API beaucoup plus rapidement
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const path = require('path');
// integrons la couche de base de donné de notre serveur mongodg
const mongoose = require('mongoose');
require('dotenv').config();

const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

mongoose.connect(process.env.mongo, {
        useUnifiedTopology: true
    }, { useNewUrlParser: true })
    .then(() => console.log('connexion a MongoDB réussie!'))
    .catch(() => console.log('connexion a MongoDB echoue!'));


// Création de l'application express
const app = express();

//Erreurs de CORS
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()

  app.options('*', (req, res) => {
    // allowed XHR methods
    res.header(
      'Access-Control-Allow-Methods',
      'GET, PATCH, PUT, POST, DELETE, OPTIONS',
    )
    res.send()
  })
})

// Rend les données du corps de la requête exploitable
// Add middleware for parsing JSON and urlencoded data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes attendues pour les differentes API
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
