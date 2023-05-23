const Sequelize = require('sequelize');
require('dotenv').config();

try {
  // Create a new Sequelize instance
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
    }
  );
  module.exports = sequelize;
} catch (error) {
  console.error('Uh oh! I was not able to connect!'.error);
}