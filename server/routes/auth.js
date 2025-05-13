const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models'); // 경로는 상황에 따라 조정

// POST /auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. 유저 존재 확인
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: '이메일이 존재하지 않습니다.' });
    }

    // 2. 비밀번호 비교
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' });
    }

    // 3. JWT 토큰 생성
    const token = jwt.sign(
      { userId: user.id, email: user.email }, // payload
      process.env.JWT_SECRET || 'secret_key', // 보통은 .env에서 관리
      { expiresIn: '1h' } // 유효시간
    );

    // 4. 응답
    res.status(200).json({ message: '로그인 성공', token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '서버 오류' });
  }
});

module.exports = router;
