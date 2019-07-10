const mongoose = require( 'mongoose' );
const atlasUrl = 'mongodb+srv://pabloLacsan:KbrbHHvRP0uQwkXz@pelisdb-qc3y9.mongodb.net/test?retryWrites=true&w=majority';//url que nos copiamos después de hacer la cuenta en mongoSB atlas para poder hacer el deploy. Es la bse de datos de producción,la de la nuve, la que no debemos tocar porque es donde van a registrarse los usuarios reales.
const devUrl = 'mongodb://localhost:27017/movies';//url de nuestra base de datos local, que utilizamos cuando estamos en desarrollo
const url = process.env.NODE_ENV === 'production'? atlasUrl : devUrl;// Utilizaremos una base de datos u otra en función de si estamos en produccion o desarrollo. NODE_ENV  es una variable que queda definida por heroku cuando estemos en producción.

mongoose.connect( url, { useNewUrlParser: true, useCreateIndex:true } )
.then( () => console.log( 'conectado a mongoDB' ) )
.catch(error=>console.log('Error al conectar a MongoDB: '+error))