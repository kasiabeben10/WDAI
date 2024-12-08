require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');
const sequelize = require("./data_models/booksdb_config");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use('/api', bookRoutes);


sequelize.sync().then(() => {
  console.log("Database synced");
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
