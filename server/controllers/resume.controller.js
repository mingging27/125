// controllers/resume.controller.js

const { Resume } = require('../models');

// 이력서 등록 (Create)
exports.createResume = async (req, res) => {
  try {
    const userId = req.user.userId;
    const resume = await Resume.create({ ...req.body, user_id: userId });
    res.status(201).json({ message: '이력서 등록 성공', resume });
  } catch (err) {
    console.error('이력서 등록 에러:', err);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 이력서 전체 조회 (Read All)
exports.getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.findAll({
      where: { user_id: req.user.userId },
      order: [['created_at', 'DESC']],
    });
    res.json({ resumes });
  } catch (err) {
    console.error('이력서 목록 조회 에러:', err);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 이력서 단일 조회 (Read One)
exports.getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      where: { resume_id: req.params.resumeId, user_id: req.user.userId },
    });

    if (!resume) return res.status(404).json({ message: '이력서 없음' });
    res.json({ resume });
  } catch (err) {
    console.error('이력서 단일 조회 에러:', err);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 이력서 수정 (Update)
exports.updateResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      where: { resume_id: req.params.resumeId, user_id: req.user.userId },
    });

    if (!resume) return res.status(404).json({ message: '이력서 없음' });

    await resume.update(req.body);
    res.json({ message: '이력서 수정 완료', resume });
  } catch (err) {
    console.error('이력서 수정 에러:', err);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 이력서 삭제 (Delete)
exports.deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      where: { resume_id: req.params.resumeId, user_id: req.user.userId },
    });

    if (!resume) return res.status(404).json({ message: '이력서 없음' });

    await resume.destroy();
    res.json({ message: '이력서 삭제 완료' });
  } catch (err) {
    console.error('이력서 삭제 에러:', err);
    res.status(500).json({ message: '서버 오류' });
  }
};
