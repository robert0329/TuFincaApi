const DbConnection = require('../db/connections');
const conexion = DbConnection();
function MetodosDB() {
    this.seleccionar = function (respuesta) {
        conexion.query('select * from tareas', function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' })
            } else {
                respuesta.send(resultado);
            }
        })
    }
    // this.seleccionartareas = function (tipo, respuesta) {
    //     console.log(tipo);
    //     conexion.query('select * from tareas where tipo=?', tipo, function (error, resultado) {
    //         if (error) {
    //             respuesta.send({ estado: 'error' });
    //         } else {
    //             respuesta.send(resultado);
    //         }
    //     })
    // }
    this.seleccionarId = function (id, respuesta) {
        console.log(id);
        conexion.query('select * from fincas where idpersona=?', id, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionarTareaId = function (id, respuesta) {
        console.log(id);
        conexion.query('select * from tareas where idpersona=?', id, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    //     this.seleccionarEmail = function (email, respuesta) {
    //         conexion.query('select * from tareas where email=?', email, function (error, resultado) {
    //             if (error) {
    //                 respuesta.send({ estado: 'error' });
    //             } else {
    //                 respuesta.send(resultado);
    //             }
    //         })
    //     }
    // this.seleccionarPassword = function (email, respuesta) {
    //     conexion.query('select* from tareas where email=?', email, function (error, resultado) {
    //         if (error) {
    //             respuesta.send({ estado: 'error' });
    //         } else {
    //             respuesta.send(resultado);
    //         }
    //     })
    // }
     this.insertar = function (datos, respuesta) {
         console.log(datos);
         conexion.query('insert into tareas set ?', datos, function (error, resultado) {
             if (error) {
                 respuesta.send({ estado: 'Error' });
             } else {
                 respuesta.send({ estado: 'Ok' });
             }
         })
     }
    this.actualizar = function (datos, respuesta) {
        conexion.query('update tareas set ? where idtarea = ?', [datos, datos.idtarea], function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send({ estado: 'Ok' });   
            }
        })
    }
    // this.delete = function (id, respuesta)
    //  {
    //     conexion.query('select * from tareas where id=?', id, function (error, result) {
    //         console.log(result);
    //         if (result) {
    //             conexion.query('delete from tareas where id = ?', id, function (error, resultado) {
    //                 if (error) {
    //                     respuesta.send({ estado: 'Error' });
    //                 } else {
    //                     respuesta.send({ estado: 'Ok' });
    //                 }
    //             });
    //         }
    //         else {
    //             respuesta.send({ estado: "No Existe" });
    //         }
    //     });  
    // }
}
module.exports = new MetodosDB();