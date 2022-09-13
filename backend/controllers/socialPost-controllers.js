const SocialPost = require("../models/socialPost-model")

exports.getTest = (req ,res , next) => {
    const stuff = [
      {
        _id: 'Sebastien',
        name: 'Mon premier objet',
        text: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'Anthony',
        name: 'Mon deuxième objet',
        text: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'nono',
        name: 'Mon troisieme objet',
        text: "Twitter est un réseau social de microblogage géré par l'entreprise Twitter Inc. Il permet à un utilisateur d’envoyer gratuitement des micromessages, appelés tweets ou gazouillis, sur internet, par messagerie instantanée ou par SMS. Ces messages sont limités à 280 caractères",
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
      {
        name: 'Mon quatrieme objet',
        text: 'Les infos de mon deuxième objet',
      },
    ];
    res.status(200).json(stuff);
  }

exports.GetAllSocialPost = (req, res, next) => {
  SocialPost.find()
    .then((socialPost) => {
      res.status(200).json(socialPost);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
}

exports.CreateSocialPost = (req, res, next) => {
  console.log(req.body);
  const socialPost = new SocialPost({
    ...req.body,
    name: Date(),
  })
  socialPost.save()
  .then(() => res.status(201).json({ message: "Post enregistré !" }))
  .catch((error) => res.status(400).json({ error }))
}