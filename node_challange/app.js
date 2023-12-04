const express = require('express');
const app = express();
const  sequelize  = require('./src/config/DatabaseConfig');
const user=require('./src/entity/User')
const port=3001;
const userController = require('./src/controller/UserController');
const authController = require('./src/controller/AuthController');
const cors = require('cors');

app.use(cors());
app.use(userController);
app.use(authController);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database and tables synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});