// dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Category = require('./category');


class Product extends Model { }

// define product data types
Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'category',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);
Product.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category',
}); // Belongs-to association

// export statement
module.exports = Product;