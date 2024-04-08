const express = require('express');
const authenticateToken = require('../../Utils/Utils-index');
const userController = require('../../Controller/UserController');
const router = express.Router()



router.post('/post', authenticateToken,userController.createUser);
router.get('/get', authenticateToken, userController.getUsers);
router.put('/update/:id', authenticateToken, userController.updateUser);
router.delete('/delete/:id', authenticateToken, userController.deleteUser);


module.exports = router