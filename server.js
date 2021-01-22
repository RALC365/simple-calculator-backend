const express = require('express');
var  favicon = require('serve-favicon')
const path = require('path');
const routes = require('./routes');
const app = express();
app.use(favicon(path.join(__dirname,'client','favicon.ico')));

//Resultados de traducción body-parser extrae toda la parte del cuerpo de una secuencia de solicitud entrante y la expone en req.body
const bodyParser = require('body-parser');

//En el deploy el puerto lo proporciona el hosting, asi que hay que hace2rlo dinámico
let port = process.env.PORT || 3000

app.set('view engine', 'html');

// Seteamos rutas staticas
app.use([bodyParser.json(), bodyParser.urlencoded({extended: true})]);
app.use(express.static(path.join(__dirname, 'client')));
app.use('/angularscripts', express.static(__dirname + '/node_modules/angular/'));
app.use('/angularroutescripts', express.static(__dirname + '/node_modules/angular-route/'));


// Seteamos la ruta de la calculadora
app.use('/', routes);

//Iniciamos el servidor
app.listen(port, (err) => {
  err
    ? console.log('¡Ups! Ocurrió un error', err)
    : console.log(`Servidor a su servicio en el puerto ${port}`);
});
