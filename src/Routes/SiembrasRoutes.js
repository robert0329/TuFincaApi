    var db = require('../Funciones/Siembras');

module.exports = function (app) {
    app.get('/siembras/', function (solicitud, respuesta) {
        db.seleccionar(respuesta);
    })
    app.get('/siembras/:idsiembra/', function (solicitud, respuesta) {
        db.seleccionarId(solicitud.params.idsiembra, respuesta);
    })
     app.post('/siembras/', function (solicitud, respuesta) {
         db.insertar(solicitud.body, respuesta);
     })
     app.put('/siembras/', function (solicitud, respuesta) {
         db.actualizar(solicitud.body, respuesta);
     })
    app.delete('/siembras/:idsiembra/', function (solicitud, respuesta) {
        db.delete(solicitud.params.idsiembra, respuesta);
    })
}