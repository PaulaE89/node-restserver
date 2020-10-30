//process objeto global dond eesta corriendo la aplicacion
//========
// puerto
//====

process.env.PORT = process.env.PORT || 3000
//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
// vencimiento del token
//60 segundos
//30 minutos
//24 horas
//30 dias

process.env.CADUCIDAD_TOKEN=60*60*24*30;

// semilla de autenticacion

process.env.SEED=process.env.SEED||'my-secret';

// Bases de datos

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

