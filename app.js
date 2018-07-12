var express = require('express');
var bodyparser = require('body-parser');
const cors = require('cors');

var app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyparser.json());

var connection = require('./connections');
var route = require('./routes');

connection.inicia();
route.configurar(app); 

  var server = app.listen(8000, function(){
  console.log('Escuchando puerto', server.address().port);
 })

