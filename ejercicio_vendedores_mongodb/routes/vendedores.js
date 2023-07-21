const express = require('express');
const router = express.Router();
const Vendedor = require('../models/Vendedor');

router.get('/', async (req, res) => {
    try {
        const vendedores = await Vendedor.findById();
        res.json(vendedores);
    } catch (err) {
        res.status(500).json({ err: "error getting Vendedores" });
    }
})

router.post('/', async (req, res) => {
    try{
        const nuevoVendedor = new Vendedor(req.body);
        await nuevoVendedor.save();
        res.json(nuevoVendedor);
    } catch(err){
        res.status(500).json({err: 'Error saving Vendedor'});
    }
});
module.exports = router;