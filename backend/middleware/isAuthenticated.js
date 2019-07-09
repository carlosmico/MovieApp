const jwt = require('jsonwebtoken');
const SECRET_AUTH_JWT = require('../config/password.js').SECRET_AUTH_JWT;
const UserModel = require('../models/User.js');

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers.authenticate // //cogemos token del header de la petición, mediante el header authenticate que hmos creado en la peticiín

        const _id = jwt.verify(token, SECRET_AUTH_JWT)._id; //sacamos la _id del usuario, id viene de el método que hemos creado en el modelo de usuario.El token se ha creado en base al SECRET
        const user = await UserModel.findOne({
            _id, // buscamos un usuario que tenga ese id y el token que este en la base de datos
            tokens: {
                $elemMatch: {
                    type: "auth",
                    token
                }
            }
        });

        if (!user) return res.status(401).send('No estás autorizado para realizar esta acción');
        req.user = user; //pasamos el user como info de la request
        return next();
    } catch (error) {
        console.log(error)
        res.status(500).send(error);

    }

}


module.exports = isAuthenticated;