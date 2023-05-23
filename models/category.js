// dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Product = require('./product');

class Category extends Model { }

// define category data types
Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'category',
    }
);
Category.hasMany(Product, {
    foreignKey: 'category_id',
    as: 'products',
}); // One-to-many association
// export statement
module.exports = Category;