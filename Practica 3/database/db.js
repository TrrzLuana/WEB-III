// app.js
const mysql = require('mysql2');

// Create a connection to the database
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bdempresa'
});

/*conexion.connect((error)=>{
  if(error){
    console.error('El error de conexion es: '+error);
    return
  }
  console.log('Conectado a la BD MySQL!');
});*/
// Connect to the database 
conexion.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
  
  // Example query
  /* connection.query('SELECT * FROM empleado', (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  }); */

  // Close the connection
  //connection.end();
});

module.exports = conexion;