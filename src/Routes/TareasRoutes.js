var db = require('../Funciones/tareas');

module.exports = function (app) {
    app.get('/tareas/', function (solicitud, respuesta) {
        db.seleccionar(respuesta);
    })
    app.get('/tareas/:id/', function (solicitud, respuesta) {
        db.seleccionarId(solicitud.params.id, respuesta);
    })
    // app.get('/Tareas/:nombre/', function (solicitud, respuesta) {
    //     db.seleccionarNombre(solicitud.params.nombre, respuesta);
    // })
    // app.get('/Tareas/api/:personaid/', function (solicitud, respuesta) {
    //     db.seleccionarPersonaId(solicitud.params.personaid, respuesta);  
    // })
     app.post('/tareas/', function (solicitud, respuesta) {
         db.insertar(solicitud.body, respuesta);
     })
    // app.put('/Tareas/', function (solicitud, respuesta) {
    //     db.actualizar(solicitud.body, respuesta);
    // })
    // app.delete('/Tareas/:id/', function (solicitud, respuesta) {
    //     db.delete(solicitud.params.id, respuesta);
    // })
}