 var db = require('../Funciones/Parcela');

module.exports = function (app) {
    app.get('/parcela/', function (solicitud, respuesta) {
        db.seleccionar(respuesta);
    })
    app.get('/parcela/:id/', function (solicitud, respuesta) {
        db.seleccionarId(solicitud.params.id, respuesta);
    })
     app.post('/parcela/', function (solicitud, respuesta) {
         db.insertar(solicitud.body, respuesta);
     })
     app.put('/parcela/', function (solicitud, respuesta) {
         db.actualizar(solicitud.body, respuesta);
     })
    app.delete('/parcela/:id/', function (solicitud, respuesta) {
        db.delete(solicitud.params.id, respuesta);
    })
}
