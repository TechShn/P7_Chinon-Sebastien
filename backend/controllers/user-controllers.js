const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user-models');

// Créer un compte et se connecter
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash,
        isAdmin: false
      });
      console.log(req.body.email);
      user.save()
        .then(() => { res.status(200).json({ message: 'Compte créer' }) })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }))
}


exports.getTest = (req ,res , next) => {
  res.send('Je suis le test signup')
  res.status(200).json(stuff);
}

// Vérifier le login et se connecter
exports.login = (req, res, next) => {
  User.findOne({ email : req.body.email})
    .then(user => {
      if(!user) {
        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if(!valid) {
            return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id,
                isAdmin: user.isAdmin},
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
          console.log(user);
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
}