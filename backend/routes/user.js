const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require('../middleware/multer-config');
const userCtrl = require('../controllers/user');
const verifyPassword = require('../middleware/verifyPassword');


router.post('/signup',verifyPassword, userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/user', userCtrl.findOne);
   // mettre a jour photo utilisateur
router.put("/photo",multer, userCtrl.photo) 
   // suprimer un compte avec son id
router.delete("/user/delete",multer, userCtrl.deleteOne);

module.exports = router;