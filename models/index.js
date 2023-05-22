const Category = require('./category');
const Product = require('./product');
const Tag = require('./tag');
const ProductTag = require('./productTags')

// Define associations between models
Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });



// Define a new one-to-many association between Tag and Product
Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'
});

Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
});


// Export the initialized models
module.exports = { Category, Product, Tag };
