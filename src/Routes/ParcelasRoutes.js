var db = require('../Funciones/parcelas');

module.exports = function (app) {
    app.get('/parcelas/', function (solicitud, respuesta) {
        db.seleccionar(respuesta);
    })
    app.get('/parcelas/:idparcelas/', function (solicitud, respuesta) {
        db.seleccionarId(solicitud.params.idparcelas, respuesta);
    })
    app.get('/parcelasidfinca/:idfinca/', function (solicitud, respuesta) {
        db.seleccionarfincaidparcela(solicitud.params.idfinca, respuesta);
    })
    app.post('/parcelas/', function (solicitud, respuesta) {
        db.insertar(solicitud.body, respuesta);
    })
    app.put('/parcelas/', function (solicitud, respuesta) {
        db.actualizar(solicitud.body, respuesta);
    })
    app.delete('/parcelas/:idparcelas/', function (solicitud, respuesta) {
        db.delete(solicitud.params.idparcelas, respuesta);
    })
}
