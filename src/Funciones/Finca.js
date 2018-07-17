const DbConnection = require('../db/connections');
const conexion = DbConnection();
function MetodosDB() {
    this.seleccionar = function (respuesta) {
        conexion.query('select * from fincas', function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' })
            } else {
                respuesta.send(resultado);
            }
        })
    }

    this.seleccionarId = function (id, respuesta) {
        conexion.query('select * from fincas where id=?', id, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionarNombre = function (nombre, respuesta) {
        conexion.query('select * from fincas where nombre=?', nombre, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionarPersonaId = function (personaid, respuesta) {
        conexion.query('select * from fincas where idpersona=?', personaid, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.insertar = function (datos, respuesta) {
        console.log(datos);
        conexion.query('insert into fincas set ?', datos, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send({ estado: 'Ok' });
            }
        })
    }
    this.actualizar = function (datos, respuesta) {
        conexion.query('update fincas set ? where id = ?', [datos, datos.id], function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send({ estado: 'Ok' });   
            }
        })
    }
    this.delete = function (id, respuesta)
     {
        conexion.query('select * from fincas where id=?', id, function (error, result) {
            console.log(result);
            if (result) {
                conexion.query('delete from fincas where id = ?', id, function (error, resultado) {
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