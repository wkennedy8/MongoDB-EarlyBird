// Let's create 3 routes.
const router = require('express').Router();
const User = require('../db/models/user');

// ROUTE 1: Get's all users.
router.get('/api/users', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((error) => console.log(error));
});

// ROUTE 2: Create a new user.
router.post('/api/users', (req, res) => {
  const { firstName, lastName, email, phone, favoriteQuote } = req.body;

  const user = new User({ firstName, lastName, email, phone, favoriteQuote });
  user
    .save()
    .then(() => res.json(user))
    .catch((error) => console.log(error));
});

// ROUTE 3: Get's a specific user.

router.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = User.findById(id);
  user.then((user) => res.json(user)).catch((error) => console.log(error));
});

module.exports = router;
