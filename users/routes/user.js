const express = require('express');
const router = express.Router();
const userController = require("../controllers/user");
const validation = require('../services/user-validation');
const auth = require('../../middleware/auth')

router.get('/', auth, userController.getAllUsers);
router.post('/register', validation.signup, userController.register);
router.post('/login', validation.login, userController.login);
router.get('/:id', auth, userController.getById);

module.exports = router;