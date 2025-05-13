// controllers/user.controller.js
const { User } = require('../models');
const bcrypt = require('bcrypt');

// [API: POST /user/signup] 회원가입 로직
exports.signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // 이메일 중복 확인
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: '이미 가입된 이메일입니다.' });
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    // 유저 생성
    const newUser = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    return res.status(201).json({ message: '회원가입 성공', user_id: newUser.user_id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: '서버 오류' });
  }
};
