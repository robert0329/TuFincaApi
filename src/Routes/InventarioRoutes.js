var db = require('../Funciones/Inventario');

module.exports = function (app) {
    app.get('/Inventario/', function (solicitud, respuesta) {
        db.seleccionar(respuesta);
    })
    app.get('/Inventario/:id/', function (solicitud, respuesta) {
        db.seleccionarId(solicitud.params.idInventario, respuesta);
    })
    app.get('/InventarioH/:idHerramientas/', function (solicitud, respuesta) {
        db.InventarioH(solicitud.params.idHerramientas, respuesta);
    })
     app.post('/Inventario/', function (solicitud, respuesta) {
         db.insertar(solicitud.body, respuesta);
     })
     app.put('/Inventario/', function (solicitud, respuesta) {
         db.actualizar(solicitud.body, respuesta);
     })
    app.delete('/Inventario/:id/', function (solicitud, respuesta) {
        db.delete(solicitud.params.id, respuesta);
    })
}