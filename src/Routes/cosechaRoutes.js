var db = require('../Funciones/cosechas');

module.exports = function (app) {
    app.get('/cosecha/', function (solicitud, respuesta) {
        db.seleccionar(respuesta);
    })
    app.get('/cosecha/:idcosecha/', function (solicitud, respuesta) {
        db.seleccionarId(solicitud.params.idcosecha, respuesta);
    })
     app.post('/cosecha/', function (solicitud, respuesta) {
         db.insertar(solicitud.body, respuesta);
     })
     app.put('/cosecha/', function (solicitud, respuesta) {
         db.actualizar(solicitud.body, respuesta);
     })
    app.delete('/cosecha/:idcosecha/', function (solicitud, respuesta) {
        db.delete(solicitud.params.idcosecha, respuesta);
    })
}