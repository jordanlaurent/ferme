// ajout du framework express  nous permettant de déployer nos API beaucoup plus rapidement
const express = require('express');
const router = express.Router();
// Pour pouvoir utiliser notre nouveau modele mongoose dans l'applucation models/sauces.js
const sauceCtrl = require('../controllers/sauces');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
// Toutes les routes des API
//router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
// recuperer une sauce avec son id
router.get('/:id', sauceCtrl.getOneSauce);
// Chercher les sauce selon tri
router.post('/search',  sauceCtrl.getAllSauces);
router.post('/create', multer, sauceCtrl.createSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);

module.exports = router;