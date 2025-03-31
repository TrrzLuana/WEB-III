const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res)=>{
    
    conexion.query('SELECT * FROM empleado', (error, results)=>{
        if (error) {
            throw error;
        }else{
        res.render('index', {results:results});
        }
    }) 
});

//Ruta para crear registros
router.get('/create', (req,res)=>{
    res.render('create');
})

//Ruta para editar registros
router.get('/edit/:id', (req,res)=>{
    const id =req.params.id;
    conexion.query('SELECT * FROM empleado WHERE id=?', [id], (error, results)=>{
        if (error) {
            throw error;
        }else{
        res.render('edit', {empleado:results[0]});
        }
    })
})

//Ruta para eliminar el registro
router.get('/delete/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM empleado WHERE id= ?', [id], (error,results)=>{
        if (error) {
            throw error;
        }else{
            res.redirect('/');
        }
    })
})

// Ruta para mostrar los empleados filtrados por ID
router.get('/search', (req, res) => {
    const searchTerm = req.query.search; // Obtener el término de búsqueda desde el parámetro "search"
    
    // Si hay un término de búsqueda, filtramos la consulta SQL por ID
    const query = searchTerm ? 
      `SELECT * FROM empleado WHERE id = ?` : 
      `SELECT * FROM empleado`;
    
    // Ejecutamos la consulta
    conexion.query(query, [searchTerm], (error, results) => {
      if (error) {
        throw error;
      } else {
        res.render('index', { results: results });
      }
    });
  });

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;