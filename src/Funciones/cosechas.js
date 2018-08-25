const DbConnection = require('../db/connections');
const conexion = DbConnection();
function MetodosDB() {
    this.seleccionar = function (respuesta) {
        conexion.query('select * from cosecha', function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' })
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionarId = function (idcosecha, respuesta) {
        conexion.query('select * from cosecha where idcosecha=?', idcosecha, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.insertar = function (datos, respuesta) {
        conexion.query('insert into cosecha set ?', datos, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send({ estado: 'Ok' });
            }
        })
    }
    this.actualizar = function (datos, respuesta) {
        conexion.query('update cosecha set ? where idcosecha = ?', [datos, datos.idcosecha], function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send({ estado: 'Ok' });
            }
        })
    }
    this.delete = function (idcosecha, respuesta) {

        conexion.query('select * from cosecha where idcosecha=?', idcosecha, function (error, result) {
            if (result) {
                conexion.query('delete from cosecha where idcosecha = ?', idcosecha, function (error, resultado) {
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