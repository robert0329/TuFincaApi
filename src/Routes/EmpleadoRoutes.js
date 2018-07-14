var db = require('../Funciones/Empleados');

module.exports = function(app) {
    app.get('/empleados/', function (solicitud, respuesta) {
        db.seleccionar(respuesta);
    })
     app.get('/empleados/:id/', function (solicitud, respuesta) {
         db.seleccionarId(solicitud.params.id, respuesta);
     })
    app.get('/empleados/api/:email/', function (solicitud, respuesta) {
        db.seleccionarEmail(solicitud.params.email, respuesta);
    })
    app.get('/empleados/apip/:email/', function (solicitud, respuesta) {
        db.seleccionarPassword(solicitud.params.email, respuesta);
    })
    app.post('/empleados/', function (solicitud, respuesta) {
        db.insertar(solicitud.body, respuesta);
    })
    app.put('/empleados/', function (solicitud, respuesta) {
        db.actualizar(solicitud.body, respuesta);
    })
    app.delete('/empleados/:id/', function (solicitud, respuesta) {
        db.borrar(solicitud.params.id, respuesta);
    })
}