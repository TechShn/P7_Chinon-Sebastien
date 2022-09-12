exports.getTest = (req ,res , next) => {
    const stuff = [
      {
        _id: 'Sebastien',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'Anthony',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'Bertrande',
        title: 'Mon troisieme objet',
        description: "Twitter est un réseau social de microblogage géré par l'entreprise Twitter Inc. Il permet à un utilisateur d’envoyer gratuitement des micromessages, appelés tweets ou gazouillis, sur internet, par messagerie instantanée ou par SMS. Ces messages sont limités à 280 caractères",
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      }
    ];
    res.status(200).json(stuff);
  }

exports.getAllSocialPost = (req, res, next) => {
  
}