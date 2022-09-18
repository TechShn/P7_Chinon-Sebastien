const express = require('express');
const auth = require('../middleware/auth')
const router = express.Router();

const socialPostCtrl = require('../controllers/socialPost-controllers');

//router.get('/', socialPostCtrl.getTest);
router.get('/', auth, socialPostCtrl.GetAllSocialPost);
router.post('/', auth, socialPostCtrl.CreateSocialPost);
router.put('/:id',  socialPostCtrl.modifySocialPost);
router.delete("/:id", auth, socialPostCtrl.DeleteSocialPost);


module.exports = router;