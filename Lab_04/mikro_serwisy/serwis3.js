require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const sequelize = require("./data_models/usersdb_config");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/api', usersRoutes);
app.use(express.json());


sequelize.sync().then(() => {
  console.log("Database synced");
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});