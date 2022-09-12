const express = require('express');
const router = express.Router();

const socialPostCtrl = require('../controllers/socialPost-controllers');

router.get('/', socialPostCtrl.getTest);
router.post('/', socialPostCtrl.getAllSocialPost)

module.exports = router;