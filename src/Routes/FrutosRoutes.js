var db = require('../Funciones/Frutos');

module.exports = function (app) {
    app.get('/frutos/', function (solicitud, respuesta) {
        db.seleccionar(respuesta);
    })
    app.get('/frutos/:id/', function (solicitud, respuesta) {
        db.seleccionarId(solicitud.params.id, respuesta);
    })
     app.post('/frutos/', function (solicitud, respuesta) {
         db.insertar(solicitud.body, respuesta);
     })
     app.put('/frutos/', function (solicitud, respuesta) {
         db.actualizar(solicitud.body, respuesta);
     })
    app.delete('/frutos/:id/', function (solicitud, respuesta) {
        db.delete(solicitud.params.id, respuesta);
    })
}