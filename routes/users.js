const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// User model
const User = require('../models/User');

// Register Handle
router.post('/register', (req, res) => {
  const { fullname, username, password } = req.body;
  // Validation passed
  User.findOne({ username: username }).then((user) => {
    if (user) {
      // User exist
      res.sendStatus(401);
    } else {
      const newUser = new User({
        fullname,
        username,
        password,
      });

      // Hash password
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          // Set new password to hashed
          newUser.password = hash;
          // Save user
          newUser
            .save()
            .then((user) => {
              res.sendStatus(200);
            })
            .catch((err) => console.log(err));
        })
      );
    }
  });
});

// Handle Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Create a new object
  User.findOne({ username: username })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, results) {
          if (err) {
            throw err;
          }
          if (results) {
            res.status(200).json({ fullname: user.fullname });
          } else {
            res.sendStatus(401);
          }
        });
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => console.log(err));
});

module.exports = router;
