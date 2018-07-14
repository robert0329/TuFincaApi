const DbConnection = require('../db/connections');
const conexion = DbConnection();
function MetodosDB() {
    this.seleccionar = function (respuesta) {
        conexion.query('select * from empleados', function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' })
            } else {
                respuesta.send(resultado);
            }
        })
    }

    this.seleccionarId = function (id, respuesta) {
        conexion.query('select * from empleados where id=?', id, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
        this.seleccionarEmail = function (email, respuesta) {
            conexion.query('select email from empleados where email=?', email, function (error, resultado) {
                if (error) {
                    respuesta.send({ estado: 'error' });
                } else {
                    respuesta.send(resultado);
                }
            })
        }
    this.seleccionarPassword = function (password, respuesta) {
        conexion.query('select password from empleados where password=?', password, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.insertar = function (datos, respuesta) {
        conexion.query('insert into empleados set ?', datos, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send({ estado: 'Ok' });
            }
        })
    }
    this.actualizar = function (datos, respuesta) {
        conexion.query('update empleados set ? where id = ?', [datos, datos.id], function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send({ estado: 'Ok' });   
            }
        })
    }
    this.delete = function (id, respuesta)
     {
        conexion.query('select * from empleados where id=?', id, function (error, result) {
            console.log(result);
            if (result) {
                conexion.query('delete from empleados where id = ?', id, function (error, resultado) {
                    if (error) {
                        respuesta.send({ estado: 'Error' });
                    } else {
                        respuesta.send({ estado: 'Ok' });
                    }
                });
            }
            else {
                respuesta.send({ estado: "No Existe" });
            }
        });  
    }
}
module.exports = new MetodosDB();