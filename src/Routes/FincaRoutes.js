var db = require('../Funciones/finca');

module.exports = function (app) {
    app.get('/finca/', function (solicitud, respuesta) {
        db.seleccionar(respuesta);
    })
    app.get('/finca/:id/', function (solicitud, respuesta) {
        db.seleccionarId(solicitud.params.id, respuesta);
    })
    app.get('/finca/:nombre/', function (solicitud, respuesta) {
        db.seleccionarNombre(solicitud.params.nombre, respuesta);
    })
    app.get('/finca/api/:idpersona/', function (solicitud, respuesta) {
        db.seleccionarPersonaId(solicitud.params.idpersona, respuesta);  
    })
    app.post('/finca/', function (solicitud, respuesta) {
        db.insertar(solicitud.body, respuesta);
    })
    app.put('/finca/', function (solicitud, respuesta) {
        db.actualizar(solicitud.body, respuesta);
    })
    app.delete('/finca/:id/', function (solicitud, respuesta) {
        db.delete(solicitud.params.id, respuesta);
    })
}