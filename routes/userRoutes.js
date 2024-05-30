const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { firstName, lastName, occupation } = req.body;

  try {
    let user = new User({
      firstName,
      lastName,
      occupation
    });

    await user.save();
    res.status(201).send('User created');
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.put('/:id', async (req, res) => {
  const { firstName, lastName, occupation } = req.body;

  try {
    let user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send('User not found');
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.occupation = occupation;

    await user.save();
    res.send('User updated');
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.send('User removed');
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
