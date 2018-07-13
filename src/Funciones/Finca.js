var conexion = require('../db/connections');

function MetodosDB() {
    this.seleccionar = function (respuesta) {
        conexion.obtener(function (er, cn) {
            cn.query('select * from fincas', function (error, resultado) {
                cn.release();
                if (error) {
                    respuesta.send({ estado: 'Error' })
                } else {
                    respuesta.send(resultado);
                }

            })
        })
    }
    this.seleccionarId = function (id, respuesta) {
        conexion.obtener(function (er, cm) {
            cm.query('select * from fincas where id=?', id, function (error, resultado) {
                cm.release();
                if (error) {
                    respuesta.send({ estado: 'error' });
                } else {
                    respuesta.send(resultado);
                }

            })
        })
    }
    this.seleccionarNombre = function (nombre, respuesta) {
        conexion.obtener(function (er, cm) {
            cm.query('select * from fincas where nombre=?', nombre, function (error, resultado) {
                cm.release();
                if (error) {
                    respuesta.send({ estado: 'error' });
                } else {
                    respuesta.send(resultado);
                }

            })
        })


    }
    this.insertar = function (datos, respuesta) {
        conexion.obtener(function (er, cn) {
            cn.query('insert into fincas set ?', datos, function (error, resultado) {
                cn.release();
                if (error) {
                    respuesta.send({ estado: 'Error' });
                } else {
                    respuesta.send({ estado: 'Ok' });
                }
            })
        })
    }
    this.actualizar = function (datos, respuesta) {
        conexion.obtener(function (er, cn) {
            cn.query('update fincas set ? where id = ?', [datos, datos.id], function (error, resultado) {
                cn.release();
                if (error) {
                    respuesta.send({ estado: 'Error' });
                } else {
                    respuesta.send({ estado: 'Ok' });
                }
            })
        })
    }
    this.borrar = function (id, respuesta) {
        conexion.obtener(function (er, cm) {
            cm.query('delete from fincas where id=?', id, function (error, resultado) {
                cm.release();
                if (error) {
                    respuesta.send({ estado: 'error' });
                } else {
                    respuesta.send(resultado);
                }

            })
        })


    }
}

module.exports = new MetodosDB();