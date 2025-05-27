const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models'); 

//API: POST /auth/login : 로그인 API
router.post('/login', async (req, res) => {
  const { login_id, password } = req.body;

  try {
    // 1. 유저 존재 확인
    const user = await User.findOne({ where: { login_id } });
    if (!user) {
      return res.status(400).json({ message: '아이디가가 존재하지 않습니다.' });
    }

    // 2. 비밀번호 비교
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' });
    }

    // 3. JWT 토큰 생성
    const token = jwt.sign(
      { userId: user.get('user_id'), email: user.get('login_id') }, // payload
      process.env.JWT_SECRET || 'secret_key', // .env에서
      { expiresIn: '1h' } // 유효시간
    );

    // 4. 응답
    res.status(200).json({ message: '로그인 성공', token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '서버 오류' });
  }
});
//api: post /auth/logout
router.post('/logout', (req, res) => {
  res.json({ message: '로그아웃 되었습니다. 토큰을 삭제해주세요.' });
});

module.exports = router;
