// app.js
const mysql2 = require('mysql2');

console.time("⏰ Modificación Básica");
// Create a connection to the database
const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb'
});


// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');

  //query

  /*const sql = "INSERT INTO users (name, email) VALUES ?";
  const users = [
        ["María López", "maria@example.com"],
        ["Carlos García", "carlos@example.com"],
    ];

  // Example query
  connection.query(sql, [users], (err, result) => {
    if (err) throw err;
    console.log("Filas insertadas:", result.affectedRows);
    console.timeEnd("Conexión Básica");
    connection.end();
  });*/

  const sql = "UPDATE users SET email = ?, name = ? WHERE id = 11 ";
  const valores = ["etorrez57@example.com", "Emilio Torrez"];

    connection.query(sql, valores, (err, result) => {
      if (err) throw err;

      console.log("✔ Filas afectadas:", result.affectedRows);


      connection.query('SELECT * FROM users', (err, results, fields) => {
        if (err) throw err;
        console.log("📄 Datos de la tabla: ");
        console.table(results);
      });
      console.timeEnd("⏰ Modificación Básica");
      connection.end();
  });
});
