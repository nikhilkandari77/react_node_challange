const express = require('express');
const userController = express.Router();
const UserService = require('../service/UserService');
const authenticateToken = require('../config/WebSecurityConfig');

const userService=new UserService();

userController.get('/users', authenticateToken,async (request, response) => {
  try {
    const users = await userService.getAll();
    response.send(users);
  } catch (error) {
    console.error('Error getting users:', error);
    response.status(500).send('Internal Server Error');
  }
});

module.exports = userController;