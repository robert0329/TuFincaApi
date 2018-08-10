const DbConnection = require('../db/connections');
const conexion = DbConnection();
function MetodosDB() {
    this.seleccionar = function (respuesta) {
        conexion.query('select * from frutos', function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' })
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionarId = function (id, respuesta) {
        conexion.query('select * from frutos where idFrutos=?', id, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.insertar = function (datos, respuesta) {
        conexion.query('insert into frutos set ?', datos, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send({ estado: 'Ok' });
            }
        })
    }
    this.actualizar = function (datos, respuesta) {
        conexion.query('update frutos set ? where idFrutos = ?', [datos, datos.idfrutos], function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send({ estado: 'Ok' });
            }
        })
    }
    this.delete = function (id, respuesta) {
        console.log(id);
        conexion.query('select * from frutos where idFrutos=?', id, function (error, result) {
            if (result) {
                conexion.query('delete from frutos where idFrutos = ?', id, function (error, resultado) {
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