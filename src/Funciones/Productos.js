const DbConnection = require('../db/connections');
const conexion = DbConnection();

function MetodosDB() {
    this.Identity = function (respuesta) {
        conexion.query('SELECT MAX(idproductos) AS idproductos FROM productos', function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' })
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionar = function (respuesta) {
        conexion.query('select * from productos', function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' })
            } else {
                respuesta.send(resultado);
            }
        })
    }   
    this.selecciona = function (respuesta) {
        conexion.query('select productos, sum(cantidad) AS cantidad from productos', function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' })
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionaId = function (productos, respuesta) {
        conexion.query('select productos, sum(cantidad) AS cantidad from productos where productos=?', productos, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionarId = function (idproductos, respuesta) {
        conexion.query('select * from productos where idproductos=?', idproductos, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionarProducto = function (productos, respuesta) {
        conexion.query('select * from productos where productos=?', productos, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.insertar = function (datos, respuesta) {
        conexion.query('insert into productos set ?', datos, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.actualizar = function (datos, respuesta) {
        conexion.query('update productos set ? where idproductos = ?', [datos, datos.idproductos], function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send({ estado: 'Ok' });
            }
        })
    }
    this.delete = function (idproductos, respuesta) {
        conexion.query('select * from productos where idproductos=?', idproductos, function (error, result) {
            if (result) {
                conexion.query('delete from productos where idproductos = ?', idproductos, function (error, resultado) {
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