const jwt = require('jsonwebtoken');
 
//Obtenir l'authorisation pour les requete
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       const userId = decodedToken.userId;
       const isAdmin = decodedToken.isAdmin;
       const userName = decodedToken.userName;
       req.auth = {
           userId: userId,
           userName: userName,
           isAdmin: isAdmin
       };
	next();
   } catch(error) {
       res.status(401).json({ error })
   }
};