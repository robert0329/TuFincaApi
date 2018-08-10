const DbConnection = require('../db/connections');
const conexion = DbConnection();
function MetodosDB() {
    this.seleccionar = function (respuesta) {
        conexion.query('select * from personas', function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' })
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionarpostlogin = function (respuesta) {
        conexion.query('select * from postlogin', function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' })
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionartareas = function (tipo, respuesta) {
        conexion.query('select * from personas where finca=?', tipo, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionartareasf = function (respuesta) {
        conexion.query('select idpersona, C.tipo, C.nombre, C.finca FROM personas C INNER JOIN postlogin O ON O.email = C.email', function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
    this.seleccionarId = function (id, respuesta) {
        conexion.query('select * from personas where id=?', id, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                respuesta.send(resultado);
            }
        })
    }
        this.seleccionarEmail = function (email, respuesta) {
            conexion.query('select * from personas where email=?', email, function (error, resultado) {
                if (error) {
                    respuesta.send({ estado: 'error' });
                } else {
                    console.log(resultado);
                    respuesta.send(resultado);
                }
            })
        }
    this.seleccionarPassword = function (email, respuesta) {
        conexion.query('select password from personas where email=?', email, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'error' });
            } else {
                
                respuesta.send(resultado);
            }
        })
    }
    this.insertar = function (datos, respuesta) {
        console.log(datos);
        conexion.query('insert into personas set ?', datos, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send({ estado: 'Ok' });
            }
        })
    }
    this.insertarpostlogin = function (datos, respuesta) {
        console.log(datos);
        conexion.query('insert into postlogin set ?', datos, function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send({ estado: 'Ok' });
            }
        })
    }
    this.actualizar = function (datos, respuesta) {
        conexion.query('update personas set ? where id = ?', [datos, datos.id], function (error, resultado) {
            if (error) {
                respuesta.send({ estado: 'Error' });
            } else {
                respuesta.send({ estado: 'Ok' });   
            }
        })
    }
    this.delete = function (id, respuesta)
     {
        conexion.query('select * from personas where id=?', id, function (error, result) {
            console.log(result);
            if (result) {
                conexion.query('delete from personas where id = ?', id, function (error, resultado) {
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
    this.DeletePostLogin = function (email, respuesta)
     {
        conexion.query('select * from postlogin where idpostlogin=?', 1, function (error, result) {
            console.log(result);
            if (result) {
                conexion.query('delete from postlogin where idpostlogin = ?', 1, function (error, resultado) {
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