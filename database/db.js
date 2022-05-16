const mysql = require('mysql');

// DATOS DE CONECCION 
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crud_nodejs_db'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('¡Conectado a la BD MySQL!')
})

module.exports = conexion;