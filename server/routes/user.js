const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller'); 

// GET /user 라우터
router.get('/', (req, res) => {
  res.send('Hello, User');
});

// [API: POST /user/signup] 사용자 회원가입
router.post('/signup', userController.signup);

module.exports = router;