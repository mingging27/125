const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller'); 
const authMiddleware = require('../middlewares/authMiddleware');
const { User } = require('../models');

// API: GET /user 라우터
router.get('/', (req, res) => {
  res.send('Hello, User');
});

// [API: POST /user/signup] 사용자 회원가입
router.post('/signup', userController.signup);


//API: GET /user/mypage
router.get('/mypage', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findByPk(userId, {
      attributes: ['user_id', 'email', 'username', 'profileImage', 'bio', 'darkmode']
    });

    if (!user) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    res.json({
      message: '마이페이지 조회 성공',
      user,
    });
  } catch (err) {
    console.error('[mypage] 에러:', err);
    res.status(500).json({ message: '서버 오류' });
  }
});

module.exports = router;