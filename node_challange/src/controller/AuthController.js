const express = require('express');
const UserService = require('../service/UserService');
const jwt = require('jsonwebtoken'); // Don't forget to import jwt
const secretKey = 'nikhil77'; // Replace with your actual secret key
const authController = express.Router();

authController.use(express.json());
const userService=new UserService();

authController.post('/login', async (request, response) => {
    console.log(request);
  const { username, password } = request.body;

  try {
    const user = await userService.getByUsername(username);

    if (!user || user.password !== password) {
      // If user is not found or password is incorrect, send 401 Unauthorized
      response.sendStatus(401);
      return;
    }

    const token = jwt.sign({ username: user.username }, secretKey);
    response.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = authController;
