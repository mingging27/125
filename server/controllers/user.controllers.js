// controllers/user.controller.js
const { User } = require('../models');
const bcrypt = require('bcrypt');

// [API: POST /user/signup] 회원가입 로직
exports.signup = async (req, res) => {
  try {
    const { login_id, email, username, password, confirmPassword,gender, birthdate, address, phone_number, profileImage } = req.body;
    //비밀번호 확인 체크
    if (password !== confirmPassword) {
      return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' });
    }
    
    // 비밀번호 확인 체크
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

    const finalProfileImage = profileImage || '/images/default_profile.png';

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
       profileImage: profileImage || fianlProfileImage
    });

    return res.status(201).json({ message: '회원가입 성공', user_id: newUser.user_id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: '서버 오류' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findByPk (userId);

    if (!user) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    const {
      username, phone_number, gender, birthdate,
      address, profileImage, bio
    } = req.body;

    if (username) user.username = username;
    if (phone_number) user.phone_number = phone_number;
    if (gender) user.gender = gender;
    if (birthdate) user.birthdate = birthdate;
    if (address) user.address = address;
    if (profileImage) user.profileImage = profileImage;
    if (bio) user.bio = bio;

    await user.save();

    res.json({ message: '회원 정보 수정 완료' });
  } catch (err) {
    console.error('[updateProfile] 에러:', err);
    res.status(500).json({ message: '서버 오류' });
  }
};