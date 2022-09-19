const SocialPost = require("../models/socialPost-model")

exports.getTest = (req ,res , next) => {
    res.send('Je suis le test')
    res.status(200).json(stuff);
  }

exports.GetAllSocialPost = (req, res, next) => {
  SocialPost.find()
    .then((socialPost) => {
      res.status(200).json(socialPost);
    })
    .catch((error) => {
      res.status(404).json({
        message: error,
      });
    });
}

exports.CreateSocialPost = (req, res, next) => {
  console.log(req.body);
  const socialPost = new SocialPost({
    ...req.body,
    userId: req.body.userId,
    name: "Sebastien",
    date: new Date().toLocaleDateString('it-IT') + ' ' + new Date().toLocaleTimeString('it-IT'),
  })
  console.log(socialPost);
  socialPost.save()
  .then(() => res.status(201).json(socialPost))
  .catch((error) => res.status(400).json({ error }))
}

exports.modifySocialPost = (req, res, next) => {
  SocialPost.findOne({_id: req.params.id})
    .then((socialPost) => {
      if (socialPost.userId /*=== req.auth.userId || req.auth.isAdmin === true*/) {
        SocialPost.updateOne({_id: req.params.id} ,{$set: req.body})
        .then(() => { res.status(200).json({ message: 'Objet modifié' }) })
        .catch(error => res.status(400).json({ error }))
      } else {
        res.status(400).json({ message: 'Not authorized' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
}


exports.DeleteSocialPost = (req, res, next) => {
  SocialPost.findOne({_id: req.params.id})
    .then((socialPost) => {
      console.log(req.auth)
      if (socialPost.userId === req.auth.userId || req.auth.isAdmin === true) {
        SocialPost.deleteOne({ _id: req.params.id })
        .then(() => {res.status(200).json({ message: "Post supprimé"})})
        .catch((error) => res.status(400).json({ error }));
      } else {
        res.status(401).json({ message: 'Not authorized' });
      }})
    .catch((error) => res.status(400).json({ error }))
}

exports.socialPostLike = (req, res, next) => {
  SocialPost.findOne({_id: req.params.id})
    .then((socialPost) => {
      if (!socialPost.userLiked.includes(req.body.userId) && req.body.like === true) {
        console.log('post liked');
        SocialPost.updateOne({ _id: req.params.id }, { $inc: {like: 1}, $push: {userLiked: req.body.userId} })
        .then(() => res.status(200).json())
        .catch(error => res.status(400).json({ error }))
      }

      if (socialPost.userLiked.includes(req.body.userId) && req.body.like === false) {
        console.log('post unliked');
        SocialPost.updateOne({_id: req.params.id}, { $inc: {like: -1}, $pull: {userLiked: req.body.userId} })
        .then(() => res.status(200).json())
        .catch(error => res.status(400).json({ error }))
      }
      res.status(200).json(socialPost)


    })
    .catch((error) => res.status(401).json({error}))
}