const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();




const userRoutes = require('./routes/user-route');
const SocialPostRoutes = require('./routes/socialPost-route')


const app = express();

// Fonction permettant de se connecter à une base de donnée
mongoose.connect(process.env.MONGODB_URI,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

 //  
app.use(express.json());


/*app.use(cors({
    origin: 'http://localhost:3000',
    methode: ['GET','POST']
}))*/

//middleware permettant de gérer certain contrôle.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use("/images", express.static(path.join(__dirname, "images")));


app.use('/api/auth', userRoutes);
app.use('/api/socialPost' , SocialPostRoutes);





module.exports = app;