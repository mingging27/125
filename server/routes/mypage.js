
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const resumeController = require('../controllers/resume.controller');

const { Scrap, CommunityPost, InfoPost } = require('../models');

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

// GET /api/mypage/resumes
router.get('/resumes', authMiddleware, resumeController.getAllResumes);

// // GET /mypage/scraps
// router.get('/scraps', authMiddleware, async (req, res) => {
//   try {
//     const userId = req.user.userId;

//     const scraps = await Scrap.findAll({
//       where: { user_id: userId },
//       include: [{
//         model: CommunityPost,
//         as: 'communityPost',
//         attributes: ['community_post_id', 'title', 'created_at']
//       }],
//       order: [['scrapped_at', 'DESC']]
//     });

//     const result = scraps.map(scrap => ({
//       community_post_id: scrap.CommunityPost?.community_post_id,
//       title: scrap.CommunityPost?.title,
//       created_at: scrap.CommunityPost?.created_at
//     }));

//     res.json({
//       message: '스크랩한 게시글 조회 성공',
//       scraps: result
//     });
//   } catch (err) {
//     console.error('[mypage/scraps] 에러:', err);
//     res.status(500).json({ message: '서버 오류' });
//   }
// });

// // DELETE /api/mypage/scraps/:postId - 스크랩 취소
// router.delete('/scraps/:postId', authMiddleware, async (req, res) => {
//   try {
//     const userId = req.user.userId;
//     const postId = req.params.postId;

//     const deleted = await Scrap.destroy({
//       where: {
//         user_id: userId,
//         community_post_id: postId
//       }
//     });

//     if (deleted === 0) {
//       return res.status(404).json({ message: '스크랩 내역이 존재하지 않음' });
//     }

//     res.json({ message: '스크랩 취소 성공' });
//   } catch (err) {
//     console.error('[mypage/scraps/:postId] 에러:', err);
//     res.status(500).json({ message: '서버 오류' });
//   }
// });


// GET /mypage/scraps - 커뮤니티 + 정보글 모두 조회
router.get('/scraps', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;

    const scraps = await Scrap.findAll({
      where: { user_id: userId },
      include: [
        {
          model: CommunityPost,
          as: 'communityPost',
          attributes: ['community_post_id', 'title', 'created_at'],
        },
        {
          model: InfoPost,
          as: 'infoPost',
          attributes: ['info_post_id', 'title']
        }
      ],
      order: [['scrapped_at', 'DESC']]
    });

    const result = scraps.map(scrap => {
      if (scrap.communityPost) {
        return {
          type: 'community',
          id: scrap.communityPost.community_post_id,
          title: scrap.communityPost.title,
          created_at: scrap.communityPost.created_at
        };
      } else if (scrap.infoPost) {
        return {
          type: 'info',
          id: scrap.infoPost.info_post_id,
          title: scrap.infoPost.title,
          created_at: scrap.infoPost.created_at
        };
      } else {
        return null;
      }
    }).filter(Boolean); // null 제거

    res.json({
      message: '스크랩한 게시글 조회 성공',
      scraps: result
    });
  } catch (err) {
    console.error('[mypage/scraps] 에러:', err);
    res.status(500).json({ message: '서버 오류' });
  }
});

// DELETE /mypage/scraps/:postId?type=info|community
router.delete('/scraps/:postId', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const postId = req.params.postId;
    const type = req.query.type;

    let where = { user_id: userId };

    if (type === 'community') {
      where.community_post_id = postId;
    } else if (type === 'info') {
      where.info_post_id = postId;
    } else {
      return res.status(400).json({ message: 'type 파라미터가 필요합니다 (info 또는 community)' });
    }

    const deleted = await Scrap.destroy({ where });

    if (deleted === 0) {
      return res.status(404).json({ message: '스크랩 내역이 존재하지 않음' });
    }

    res.json({ message: '스크랩 취소 성공' });
  } catch (err) {
    console.error('[mypage/scraps/:postId] 에러:', err);
    res.status(500).json({ message: '서버 오류' });
  }
});



module.exports = router;
