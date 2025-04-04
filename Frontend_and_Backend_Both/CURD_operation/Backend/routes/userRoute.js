const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// ✅ Don't use dynamic params unless needed, like '/:id'
router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);

module.exports = router;
