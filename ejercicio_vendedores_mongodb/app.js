const express = require('express');
const app = express();
const routeVendedores = require('./routes/vendedores');

app.use(express.json());

app.use('/vendedores', routeVendedores);
app.listen(3000,() => {
    console.log('listening on 3000');
});
