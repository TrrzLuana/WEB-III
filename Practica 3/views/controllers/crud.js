const conexion = require('../database/db');

exports.save = (req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const depto = req.body.depto;
    const salario = req.body.salario;
    conexion.query('INSERT INTO empleado SET ? ', {id:id, nombre:name, departamento:depto, salario:salario}, (error, results)=>{
         if (error) {
            console.log(error);
         }else{
            res.redirect('/');
         }
    })
}

exports.update = (req,res)=>{
    const id = req.body.id;
    const nombre = req.body.name;
    const departamento = req.body.depto;
    const salario = req.body.salario;
    conexion.query('UPDATE empleado SET ? WHERE id= ?', [{nombre:nombre, departamento:departamento, salario:salario, id:id}, id], (error, results)=>{
        if (error) {
            console.log(error);
         }else{
            res.redirect('/');
         }
    })
}
