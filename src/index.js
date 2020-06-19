const express = require('express');
const app = express();

const morgan = require('morgan');

//Configuraciones
app.set('port', process.env.PORT || 3000);

//midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users',require('./routes/users'));

//Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ', app.get('port'));
})