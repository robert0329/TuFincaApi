const DbConnection = require('../db/connections');
const conexion = DbConnection();
function MetodosDB() {
    this.Identity = function (respuesta) {
        conexion.query('SELECT MAX(idherramientas) AS idherramientas FROM herramientas', function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' })
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionar = function (respuesta) {
        conexion.query('select * from herramientas', function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' })
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.selecciona = function (respuesta) {
        conexion.query('select herramientas, sum(cantidad) AS cantidad from herramientas', function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' })
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionaId = function (herramientas, respuesta) {
        conexion.query('select herramientas, sum(cantidad) AS cantidad from herramientas where herramientas=?', herramientas, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionarId = function (idherramientas, respuesta) {
        conexion.query('select * from herramientas where idherramientas=?', idherramientas, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionarHerramienta = function (herramientas, respuesta) {
        conexion.query('select * from herramientas where herramientas=?', herramientas, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.insertar = function (datos, respuesta) {
        conexion.query('insert into herramientas set ?', datos, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.actualizar = function (datos, respuesta) {
        conexion.query('update herramientas set ? where idherramientas = ?', [datos, datos.idherramientas], function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send({ estado: 'Ok' });
            }
        })
    }
    this.delete = function (id, respuesta) {
        console.log(id);
        conexion.query('select * from herramientas where idherramientas=?', id, function (error, result) {
            if (result) {
                conexion.query('delete from herramientas where idherramientas = ?', id, function (error, resultado) {
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