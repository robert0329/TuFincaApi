var db = require('../Funciones/Productos');

module.exports = function (app) {
    app.get('/productosidentity/', function (solicitud, respuesta) {
        db.Identity(respuesta);
    })
    app.get('/productos/', function (solicitud, respuesta) {
        db.seleccionar(respuesta);
    })
    // app.get('/productos/', function (solicitud, respuesta) {
    //     db.selecciona(respuesta);
    // })


    app.get('/productosP/:productos/', function (solicitud, respuesta) {
        db.seleccionaId(solicitud.params.productos, respuesta);
    })
    app.get('/productos/:idproductos/', function (solicitud, respuesta) {
        db.seleccionarId(solicitud.params.idproductos, respuesta);
    })
    app.get('/getproductos/:productos/', function (solicitud, respuesta) {
        db.seleccionarHerramienta(solicitud.params.productos, respuesta);
    })



     app.post('/productos/', function (solicitud, respuesta) {
         db.insertar(solicitud.body, respuesta);
     })
     app.put('/productos/', function (solicitud, respuesta) {
         db.actualizar(solicitud.body, respuesta);
     })
    app.delete('/productos/:idproductos/', function (solicitud, respuesta) {
        db.delete(solicitud.params.idproductos, respuesta);
    })
}