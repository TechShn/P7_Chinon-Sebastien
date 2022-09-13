const express = require('express');
const router = express.Router();

const socialPostCtrl = require('../controllers/socialPost-controllers');

//router.get('/', socialPostCtrl.getTest);
router.get('/', socialPostCtrl.GetAllSocialPost);
router.post('/', socialPostCtrl.CreateSocialPost);

module.exports = router;