const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//settings
app.set('port', process.env.PORT || 8000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

//routes
require('./Routes/FincaRoutes')(app);
require('./Routes/EmpleadoRoutes')(app);
require('./Routes/TareasRoutes')(app);
require('./Routes/FrutosRoutes')(app);
require('./Routes/InventarioRoutes')(app);
require('./Routes/HerramientasRoutes')(app);
require('./Routes/ProductosRoutes')(app);
require('./Routes/parcelasRoutes')(app);
require('./Routes/siembrasRoutes')(app);
require('./Routes/cosechaRoutes')(app);
//statics files
app.listen(app.get('port'), () =>{
    console.log('Server Started on port ' + app.get('port'));
});