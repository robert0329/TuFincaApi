var express = require('express');
var bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

var app = express();

app.set('port', process.env.PORT || 8000);
//middlewares
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyparser.json());

//Routes
var connection = require('./db/connections');
var route = require('./Routes/routes');

//settings
connection.inicia();
route.configurar(app); 

 app.listen(app.get('port'), () =>{
  console.log('server on port ' + app.get('port'));
});

