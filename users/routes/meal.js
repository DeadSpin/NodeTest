const express = require('express');
const router = express.Router();
const mealController = require("../controllers/meal");
const auth = require('../../middleware/auth')

router.get('/', auth, mealController.getAll);
router.post('/add', auth, mealController.register);
router.patch('/:id', auth, mealController.update);
router.get('/:id', auth, mealController.getById);
router.delete('/:id', auth, mealController.deleteMeal);

module.exports = router;