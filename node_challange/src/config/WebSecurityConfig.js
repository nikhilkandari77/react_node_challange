const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const secretKey = 'nikhil77';

app.use(bodyParser.json());

const authenticateToken = (req, res, next) => {
  const tokenHeader = req.headers['authorization'];

  if (!tokenHeader || !tokenHeader.startsWith('Bearer ')) {
    return res.sendStatus(401);
  }

  const token = tokenHeader.split('Bearer ')[1];

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
