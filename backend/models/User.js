const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const SECRET_AUTH_JWT = require('../config/password').SECRET_AUTH_JWT;

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    tokens: [{ //array de tokens
        token: { //string del jsonwt
            type: String,
            required: true,
        },
        type: { //string que indica el tipo de token, por ejemplo 'auth'
            type: String,
            required: true
        }
    }],

    list: [Number],

    watchlist: [Number],

    favorites: [Number]

});

userSchema.methods.toJSON = function () { //Modificamos el JSON para que cuando mandemos el usuario al frontend no se envíe la password
    //Usamos la función de ES5 porque si no el .this nos daría null
    const user = this._doc; //el JSON de mongoose tiene muchas cosas internas, entre ellas el _doc, que contiene los datos del usuario que nos interesan
    delete user.password;
    delete user.tokens; //eliminamos los tokens también, para no enviar al frontend todos los tokens del usuario
    return user;
}

userSchema.methods.generateAuthToken = function () {
    const user = this;
    const token = jwt.sign({
        _id: user._id
    }, SECRET_AUTH_JWT, {
        expiresIn: '7d'
    }) //Generamos el token con el secret
    user.tokens = [...user.tokens, {
        token,
        type: 'auth'
    }] //añadimos el token a a la array de tokens del usuario
    return user.save().then(() => token) //guarda el usuario actualizado con el nuevo token en la base de datos y devuelve unapromesa con el token. Con el endpoint lo mandaremos al frontend y desde el frontend lo guardaremos en la local storage para que se guarde la sesión
        .catch(console.log);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;