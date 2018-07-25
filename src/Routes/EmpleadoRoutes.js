var db = require('../Funciones/Empleados');

module.exports = function(app) {
    app.get('/personas/', function (solicitud, respuesta) {
        db.seleccionar(respuesta);
    })
    app.get('/postlogin/', function (solicitud, respuesta) {
        db.seleccionarpostlogin(respuesta);
    })
    app.get('/personas/tareas/:tipo/', function (solicitud, respuesta) {
        db.seleccionartareas(solicitud.params.tipo,respuesta);
    })
     app.get('/personas/:id/', function (solicitud, respuesta) {
         db.seleccionarId(solicitud.params.id, respuesta);
     })
    app.get('/personas/email/:email/', function (solicitud, respuesta) {
        db.seleccionarEmail(solicitud.params.email, respuesta);
    })
    app.get('/personas/password/:email/', function (solicitud, respuesta) {
        db.seleccionarPassword(solicitud.params.email, respuesta);
    })
    app.post('/personas/', function (solicitud, respuesta) {
        db.insertar(solicitud.body, respuesta);
    })
    app.post('/postlogin/', function (solicitud, respuesta) {
        db.insertarpostlogin(solicitud.body, respuesta);
    })
    app.put('/personas/', function (solicitud, respuesta) {
        db.actualizar(solicitud.body, respuesta);
    })
    app.delete('/personas/:id/', function (solicitud, respuesta) {
        db.delete(solicitud.params.id, respuesta);
    })
    app.delete('/postlogin/:id/', function (solicitud, respuesta) {
        db.DeletePostLogin(solicitud.params.id, respuesta);
    })
}