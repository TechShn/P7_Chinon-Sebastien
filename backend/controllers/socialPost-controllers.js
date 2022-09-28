const SocialPost = require("../models/socialPost-model")
const fs =require('fs')


exports.getTest = (req ,res , next) => {
    res.send('Je suis le test')
    res.status(200).json(stuff);
  }

exports.GetAllSocialPost = (req, res, next) => {
  SocialPost.find().sort({date: -1})
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
  const data = req.file ? {
      ...JSON.parse(req.body.dataField),
      imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
  } : {...JSON.parse(req.body.dataField)};
  const socialPost = new SocialPost({
    ...data,
    userId: data.userId,
    name: data.userName,
    date: new Date().toLocaleDateString('it-IT') + ' ' + new Date().toLocaleTimeString('it-IT'),
  })
  console.log(data);
  socialPost.save()
  .then(() => res.status(201).json(socialPost))
  .catch((error) => res.status(400).json({ error }))
}

exports.modifySocialPost = (req, res, next) => {
  console.log(req.body);
  const data = req.file ? {
    ...JSON.parse(req.body.dataModif),
    imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`} : {...JSON.parse(req.body.dataModif)}

  SocialPost.findOne({_id: req.params.id})
    .then((socialPost) => {
      if (socialPost.userId === req.auth.userId || req.auth.isAdmin === true) {

        req.file ? 
          fs.unlink(`images/${socialPost.imageUrl.split('/images/')[1]}`, () => {
            SocialPost.updateOne({_id: req.params.id} ,{ ...data, _id: req.params.id })
            .then(() => { res.status(200).json({ message: 'Objet modifié' }) })
            .catch(error => res.status(400).json({ error }))}) 

            : SocialPost.updateOne({_id: req.params.id} ,{ ...data, _id: req.params.id })
            .then(() => { res.status(200).json({ message: 'Objet modifié' }) })
            .catch(error => res.status(400).json({ error }));

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
      if (socialPost.userId === req.auth.userId || req.auth.isAdmin === true) {
        console.log(socialPost)
        socialPost.imageUrl ? 
        
        fs.unlink(`images/${socialPost.imageUrl.split('/images/')[1]}`, () => {
          SocialPost.deleteOne({_id: req.params.id})
          .then(() => { res.status(200).json({ message: "Post supprimé" }) })
          .catch(error => res.status(400).json({ error }))})

        

          : SocialPost.deleteOne({ _id: req.params.id })
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