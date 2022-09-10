const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user-controllers')


// Route user
router.post('/signup', userCtrl.signup );
router.get('/signup', userCtrl.test);
router.post('/login', userCtrl.login );



module.exports = router;