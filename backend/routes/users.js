var express = require('express');
var router = express.Router();
const UserModel=require('../models/User');
const isAuthenticated = require('../middleware/isAuthenticated');
const authorization = require ('../middleware/authorization.js')


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


router.get( '/logout', authorization, ( req, res ) => {

    const tokens = req.user.tokens.filter( token => token.type !== 'auth' ); //esto quitaría todos los tokens de tipo auth
    UserModel.findByIdAndUpdate( req.user._id, { tokens }, { new: true, useFindAndModify: false } )//en req.user esta la información del usuario que se guardo desde el middleware
        .then( () => res.status( 200 ).json( { message: 'You have been successfully logged out' } ) )
        .catch( error => res.status( 500 ).json( { error, message: 'Something went wrong, our apologies' } ) );
} );


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


// router.patch( '/updateProfile', isAuthenticated, uploadAvatar.single('avatar'), async ( req, res ) => { //aquí se añade uploadAvatar para que, en esta función concreta, se aplique multer. Primero hace el auth para ver que el user es el que toca, y luego el uploadAvatar te lo guarda. Hay que poner .single('avatar') para que no de error, ya que puedes subir solo un archivo (single) o multiples (array).
//     try {
//         const user = await UserModel.findByIdAndUpdate( req.user._id,{ //aquí se hace la petición para actualizar la imagen.
//             ...req.body, // aquí está la petición de todo el usuario.
//             imagePath: req.file.filename //añadimos al campo imagePath el filname que nos devuelve Multer, para asegurarnos que es el mismo que el de la base de datos.
//         },  { new: true, useFindAndModify: false } )
//         res.send( user )
//     } catch ( error ) {
//         res.status( 500 ).send( error )
//     }
// } )


module.exports = router;
