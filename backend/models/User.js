const mongoose=require('mongoose');

const userSchema = new mongoose.Schema ({
    username :{
        type: String
    },

    email: {
        type: String
    },

    password : {
        type: String
    },

    list :{
        type: Array
    },

    watchlist: {
        type: Array
    },

    favorites:{
        type: Array
    }

});

userSchema.methods.toJSON = function () {//Modificamos el JSON para que cuando mandemos el usuario al frontend no se envíe la password
    //Usamos la función de ES5 porque si no el .this nos daría null
    const user = this._doc;//el JSON de mongoose tiene muchas cosas internas, entre ellas el _doc, que contiene los datos del usuario que nos interesan
    delete user.password;
    delete user.tokens; //eliminamos los tokens también, para no enviar al frontend todos los tokens del usuario
    return user;
}

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;