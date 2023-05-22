const Category = require('./category');
const Product = require('./product');
const Tag = require('./tag');

// Define associations between models
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });


// Define a new one-to-many association between Tag and Product
Tag.hasMany(Product, { foreignKey: 'tag_id' });
Product.belongsTo(Tag, { foreignKey: 'tag_id' });

// Export the initialized models
module.exports = { Category, Product, Tag };
