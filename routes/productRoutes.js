const router = require('express').Router();
const Product = require('../models/product.js');
const Tag = require('../models/tag.js')

// get products - get
router.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll({ include: [Tag] });
        res.json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get product by ID - get 
router.get('products/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id, {
            include: [Tag],
        });
        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// create new product - post
router.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

// update a product - put
router.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.update({
            where: { id: req.params.id },
        });
        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

// delete a product - delete
router.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.destroy({
            where: { id: req.params.id },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
