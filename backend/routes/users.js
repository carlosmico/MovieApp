var express = require('express');
var router = express.Router();
const UserModel=require('../models/User')
const isAuthenticated = require('../middleware/isAuthenticated')


router.post('/register', async (req, res) => {
  try {
      const user = await new UserModel({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          list: [],
          watchlist: [],
          favorites: [],
          likes:[Number] 
      }).save();
      const token = await user.generateAuthToken();//ejecutamos el metodo que gnera un token al usuario. Pero esperamos a ue llegue el token generado
      res.status(201).send({
          user,
          token//enviamos el token generado al frontend
      })
  } catch (error) {
      console.log(error)
  }
});


router.post('/logout', async(req, res) => {
    
})


router.get('/info', isAuthenticated, (req, res)=>{
    res.send(req.user)
})

// router.get('/like/:idMovie', isAuthenticated, async(req,res)=>{
//     try {
//         const user = await UserModel.findByIdAndUpdate(req.user._id, {$push: {
//         likes: Number(req.params.idMovie)    } 
//      }, {new:true} )
//         res.send(user) 
//     } catch (error) {
//         res.status(500).send(error)
//     }
// }) 

// router.get('/dislike/:idMovie', isAuthenticated, async(req,res)=>{
//     try {
//         const user = await UserModel.findByIdAndUpdate(req.user._id, {$pull: {
//         likes: Number(req.params.idMovie)    
//     } 
//     }, {new:true} )
//         res.send(user) 
//     } catch (error) {
//         res.status(500).send(error)
//     }
// }) 



module.exports = router;
