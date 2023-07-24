const express = require('express');
const app = express();
app.use(express.json());

//Importamos el rounter de Libros
const librosRouter = require('./routes/libros');

//Importamos el middleware Error handler
const errorHandler = require('./middleware/errorHandler');

app.use('/libros', librosRouter);
app.use(errorHandler);
app.listen(3000,() => {
    console.log('server listening on port 3000');
});
