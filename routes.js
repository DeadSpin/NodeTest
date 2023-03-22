const express = require('express');
const router = express.Router();

const userRoutes = require("./users/routes/user");
router.get('/', function(){ }).use('/user', userRoutes);

const mealRoutes = require("./users/routes/meal");
router.get('/', function(){ }).use('/meal', mealRoutes);

module.exports = router;