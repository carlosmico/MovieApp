var express = require('express');
var router = express.Router();
const UserModel=require('../models/User')
router.post('/register', async (req, res) => {
  try {
      const user = await new UserModel({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          list: [],
          watchlist: [],
          favorites: []
         
      }).save();
      // const token = await user.generateAuthToken();//ejecutamos el metodo que gnera un token al usuario. Pero esperamos a ue llegue el token generado
      // res.status(201).send({
      //     info: `¡Bienvenido ${user.name}!`,
      //     user,
      //     token//enviamos el token generado al frontend
      // })
  } catch (error) {
      console.log(error)
  }
});

module.exports = router;
