const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller'); 
const authMiddleware = require('../middlewares/authMiddleware');

// API: GET /user 라우터
router.get('/', (req, res) => {
  res.send('Hello, User');
});

// [API: POST /user/signup] 사용자 회원가입
router.post('/signup', userController.signup);

//API: GET /user/mypage
router.get('/mypage', authMiddleware, (req, res) => {
  console.log('사용자 정보:', req.user); // userId, email 확인 가능
  res.json({ message: '마이페이지 접근 성공', user: req.user });
});

module.exports = router;