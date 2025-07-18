const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controllers'); 
const authMiddleware = require('../middlewares/authMiddleware');
const { User } = require('../models');
const { Resume } = require('../models');

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
      attributes: ['user_id','login_id', 'email', 'username', 'profileImage', 'bio', 'darkmode', 'gender', 'address', 'birthdate', 'phone_number']
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

// PUT /user/mypage/update
router.put('/mypage/update', authMiddleware, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.userId);
    if (!user) return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });

    const {
      username, phone_number, gender, birthdate, address,
      profileImage, bio
    } = req.body;

    // 업데이트 가능한 항목
    if (username) user.username = username;
    if (phone_number) user.phone_number = phone_number;
    if (gender) user.gender = gender;
    if (birthdate) user.birthdate = birthdate;
    if (address) user.address = address;
    if (profileImage) user.profileImage = profileImage;
    if (bio) user.bio = bio;

    await user.save();
    return res.json({ message: '회원 정보 수정 완료' });

  } catch (err) {
    console.error('[updateProfile] 에러:', err);
    return res.status(500).json({ message: '서버 오류' });
  }
});


//API: GET /user/ resumes
router.get('/resumes', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;

    const resumes = await Resume.findAll({
      where: { user_id: userId },
      attributes: ['resume_id', 'title', 'created_at'],
      order: [['created_at', 'DESC']]
    });

    res.json({
      message: '이력서 목록 조회 성공',
      resumes
    });
  } catch (err) {
    console.error('[resumes] 에러:', err);
    res.status(500).json({ message: '서버 오류' });
  }
});

//API: GET /user/resumes/:resumeId
router.get('/resumes/:resumeId', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const resumeId = req.params.resumeId;

    const resume = await Resume.findOne({
      where: {
        resume_id: resumeId,
        user_id: userId, // 내가 쓴 이력서인지 확인
      },
      attributes: ['resume_id', 'title', 'content', 'created_at'],
    });

    if (!resume) {
      return res.status(404).json({ message: '이력서를 찾을 수 없습니다.' });
    }

    res.json({ message: '이력서 조회 성공', resume });
  } catch (err) {
    console.error('[resume-detail] 에러:', err);
    res.status(500).json({ message: '서버 오류' });
  }
});

module.exports = router;