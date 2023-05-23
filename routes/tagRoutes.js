const router = require('express').Router();
const Product = require('../models/product.js');
const Tag = require('../models/tag.js')

// get all
router.get('/tags', async (req, res) => {
    try {
        const tags = await Tag.findAll({ include: [Product] });
        res.json(tags);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// get tag by ID
router.get('/tags/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, as: 'products' }], // Specify the association and alias
    });
    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// create new tag
router.post('/tags', async (req, res) => {
    try {
        const tag = await Tag.create(req.body);
        res.status(201).json(tag);
    } catch (err) {
        console.error(err);
        res.status(4400).json(err);
    }
});

// update tag
router.put('/tags/:id', async (req, res) => {
    try {
        const tag = await Tag.update(req.body, {
            where: { id: req.params.id },
        });
        res.json(tag);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

// delete a tag
router.delete('/tags/:id', async (req, res) => {
    try {
        const tag = await Tag.destroy({
            where: { id: req.params.id },
        });
        res.json(tag);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
