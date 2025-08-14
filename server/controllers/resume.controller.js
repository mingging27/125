// controllers/resume.controller.js

const { Resume, UserCertificate, UserLanguageScore, UserPreferredDay } = require('../models');

exports.createResume = async (req, res) => {
  try {
    const userId = req.user.userId;

    if (!req.body.resume_title || req.body.resume_title.trim() === '') {
      return res.status(400).json({ message: '제목은 필수 입력입니다.' });
    }

    // 1) Resume 단독 생성
    const resume = await Resume.create({
      ...req.body,
      resume_title: req.body.resume_title,
      user_id: userId,
    });

    const resumeId = resume.resume_id;

    // 2) 연관 데이터 개별 생성
    for (const cert of (req.body.certificates || [])) {
      await UserCertificate.create({
        ...cert,
        user_id: userId,
        resume_id: resumeId,
      });
    }

    for (const lang of (req.body.languageScores || [])) {
      await UserLanguageScore.create({
        ...lang,
        user_id: userId,
        resume_id: resumeId,
      });
    }

    for (const dayObj of (req.body.preferredDays || [])) {
      await UserPreferredDay.create({
        ...dayObj,
        user_id: userId,
        resume_id: resumeId,
      });
    }

    // 3) 저장된 데이터 다시 조회해서 반환
    const fullResume = await Resume.findOne({
      where: { resume_id: resumeId },
      include: [
        { model: UserCertificate, as: 'certificates', attributes: ['certificate_name', 'acquisition_year'] },
        { model: UserLanguageScore, as: 'languageScores', attributes: ['test_name', 'score', 'acquisition_year'] },
        { model: UserPreferredDay, as: 'preferredDays', attributes: ['day'] }
      ],
    });

    res.status(201).json({ message: '이력서 등록 성공', resume: fullResume });
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
      attributes:['resume_id', 'resume_title', 'created_at']
    });
    const result = resumes.map(r => ({
    resume_id: r.resume_id,
    title: r.resume_title,
    created_at: r.created_at,
    }));

    res.json({ resumes: result });
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
      include: [
        { model: UserCertificate, as: 'certificates', attributes: ['certificate_name', 'acquisition_year'] },
        { model: UserLanguageScore, as: 'languageScores', attributes: ['test_name', 'score', 'acquisition_year'] },
        { model: UserPreferredDay, as: 'preferredDays', attributes: ['day'] }
      ],
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

    await resume.update({
      ...req.body,
      resume_title: req.body.resume_title
    });
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
