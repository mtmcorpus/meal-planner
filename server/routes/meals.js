const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

// @route   GET api/meals
// @desc    Get all meals
// @access  Public
router.get('/', async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   POST api/meals
// @desc    Add a new meal
// @access  Public
router.post('/', async (req, res) => {
  const { name, calories } = req.body;

  try {
    const newMeal = new Meal({
      name,
      calories
    });

    const meal = await newMeal.save();
    res.json(meal);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;