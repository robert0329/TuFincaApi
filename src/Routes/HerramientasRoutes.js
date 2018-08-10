var db = require('../Funciones/Herramientas');

module.exports = function (app) {
    app.get('/herramientasidentity/', function (solicitud, respuesta) {
        db.Identity(respuesta);
    })
    app.get('/herramientas/', function (solicitud, respuesta) {
        db.seleccionar(respuesta);
    })
    app.get('/herramienta/', function (solicitud, respuesta) {
        db.selecciona(respuesta);
    })
    app.get('/herramienta/:herramientas/', function (solicitud, respuesta) {
        db.seleccionaId(solicitud.params.herramientas, respuesta);
    })
    app.get('/herramientas/:idherramientas/', function (solicitud, respuesta) {
        db.seleccionarId(solicitud.params.idherramientas, respuesta);
    })
    app.get('/getherramientas/:herramientas/', function (solicitud, respuesta) {
        db.seleccionarHerramienta(solicitud.params.herramientas, respuesta);
    })
     app.post('/herramientas/', function (solicitud, respuesta) {
         db.insertar(solicitud.body, respuesta);
     })
     app.put('/herramientas/', function (solicitud, respuesta) {
         db.actualizar(solicitud.body, respuesta);
     })
    app.delete('/herramientas/:id/', function (solicitud, respuesta) {
        db.delete(solicitud.params.id, respuesta);
    })
}