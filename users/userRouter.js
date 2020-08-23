const express = require('express');
const Users = require('../users/userModel');
const protected = require('../middleware/protected-middleware');

const router = express.Router();

router.get('/', protected, (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
});

module.exports = router;