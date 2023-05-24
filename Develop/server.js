require('dotenv').config();
const express = require('express');
const routes = require('./routes/api');
const sequelize = require('./config/connection.js');
const seedAll = require('./seeds'); // Import the seed function

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync sequelize models to the database
sequelize.sync({ force: false }).then(async () => {
  // Seed the database
  await seedAll();

  // Start the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
