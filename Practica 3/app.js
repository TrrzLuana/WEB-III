const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/', require('./router'));

const server = app.listen(3000, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:3000`);
});

server.on('error', (err) => {
    console.error('Error al iniciar el servidor:', err.message);
});
