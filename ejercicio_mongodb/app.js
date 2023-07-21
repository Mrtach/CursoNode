const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/empresa',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const vendorScheme =new mongoose.Schema({
    nombre: String,
    productos: String,
    email: String
});

const Vendedor = mongoose.model('Vendedor',vendorScheme);
module.exports = Vendedor;