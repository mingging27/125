
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const { Application, JobPost } = require('../models');

// GET /mypage/applications
router.get('/applications', authMiddleware, async (req, res) => {
  try {
    console.log('[DEBUG] userId:', req.user.userId);

    const userId = req.user.userId;

    const applications = await Application.findAll({
      where: { user_id: userId },
      include: [{
        model: JobPost,
        attributes: ['title']
      }],
      attributes: ['application_id', 'applied_at', 'status'],
      order: [['applied_at', 'DESC']]
    });

    const result = applications.map(app => ({
      application_id: app.application_id,
      job_title: app.JobPost?.title || '공고 없음',
      applied_at: app.applied_at,
      status: app.status
    }));

    res.json({
      message: '지원 현황 조회 성공',
      applications: result
    });
  } catch (err) {
    console.error('[mypage/applications] 에러:', err);
    res.status(500).json({ message: '서버 오류' });
  }
});

module.exports = router;
