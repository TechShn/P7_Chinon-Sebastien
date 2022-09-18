const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       const userId = decodedToken.userId;
       const isAdmin = decodedToken.isAdmin
       req.auth = {
           userId: userId,
           isAdmin: isAdmin
       };
	next();
   } catch(error) {
       res.status(401).json({ error })
       //console.log(jwt.verify(token, 'RANDOM_TOKEN_SECRET'));
   }
};