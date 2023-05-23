const router = require('express').Router();
const Category = require('../models/category.js');
const Product = require('../models/product.js');


// get all categories - get
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// get category by ID - get
router.get('/categories/:id', async(req, res) => {
    try {
        const category = await Category.findByPk(req.params.id, {
            include: [{ model: Product, as: 'products' }],
        });
        res.json(category);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// create new category - post
router.post('/categories', async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

// update a category - put
router.put('/categories/:id', async (req, res) => {
    try {
        const category = await Category.update(req.body, {
            where: { id: req.params.id },
        });
        res.json(category);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

// delete a category - delete
router.delete('/categories/:id', async (req, res) => {
    try {
        const category = await Category.destroy({
            where: { id: req.params.id },
        });
        res.json(category);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;