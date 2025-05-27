// controllers/user.controller.js
const { User } = require('../models');
const bcrypt = require('bcrypt');

// [API: POST /user/signup] 회원가입 로직
exports.signup = async (req, res) => {
  try {
    const { login_id, email, username, password, confirmPassword,gender, birthdate, address, phone_number } = req.body;
    //비밀번호 확인 체크
    if (password !== confirmPassword) {
      return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' });
    }

    // 아이디디 중복 확인
    const existingUser = await User.findOne({ where: { login_id } });
    if (existingUser) {
      return res.status(409).json({ message: '이미 사용 중인 아이디입니다.' });
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    // 유저 생성
    const newUser = await User.create({
      login_id,
      email, 
      password: hashedPassword,
      username, 
      gender,
      birthdate,
      phone_number,
      address, 
    });

    return res.status(201).json({ message: '회원가입 성공', user_id: newUser.user_id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: '서버 오류' });
  }
};
