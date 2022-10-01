const express = require('express');
const auth = require('../middleware/auth')
const router = express.Router();
const multer = require("../middleware/multer-config");

const socialPostCtrl = require('../controllers/socialPost-controllers');

router.get('/', auth, socialPostCtrl.GetAllSocialPost);
router.post('/', auth, multer, socialPostCtrl.CreateSocialPost);
router.put('/:id', auth, multer,  socialPostCtrl.modifySocialPost);
router.delete("/:id", auth, socialPostCtrl.DeleteSocialPost);
router.post("/:id", auth, socialPostCtrl.socialPostLike)


module.exports = router;