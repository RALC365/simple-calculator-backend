const router = require('express').Router();

//Renderizamos la página principal (donde esta añadido la calculadora)
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;
