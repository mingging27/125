const express = require('express');
const { CommunityPost } = require('../models');

const router = express.Router();

// 게시글 목록 조회 (GET /community)
router.get('/', async (req, res, next) => {
  try {
    const posts = await CommunityPost.findAll({
      order: [['created_at', 'DESC']],
    });
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

// 게시글 상세 조회 (GET /community/:id)
router.get('/:id', async (req, res, next) => {
  try {
    const post = await CommunityPost.findByPk(req.params.id);
    if (!post) return res.status(404).json({ message: '게시글이 없습니다.' });
    res.json(post);
  } catch (err) {
    next(err);
  }
});

// 게시글 생성 (POST /community)
router.post('/', async (req, res, next) => {
  try {
    const { title, content, user_id } = req.body;
    if (!user_id) return res.status(400).json({ message: 'user_id가 필요합니다.' });

    const newPost = await CommunityPost.create({
      title,
      content,
      user_id,
      created_at: new Date(),
      like_count: 0,
    });
    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
});

// 게시글 수정 (PUT /community/:id)
router.put('/:id', async (req, res, next) => {
  try {
    const post = await CommunityPost.findByPk(req.params.id);
    if (!post) return res.status(404).json({ message: '게시글이 없습니다.' });

    const { title, content } = req.body;
    await post.update({ title, content });
    res.json(post);
  } catch (err) {
    next(err);
  }
});

// 게시글 삭제 (DELETE /community/:id)
router.delete('/:id', async (req, res, next) => {
  try {
    const post = await CommunityPost.findByPk(req.params.id);
    if (!post) return res.status(404).json({ message: '게시글이 없습니다.' });

    await post.destroy();
    res.json({ message: '게시글이 삭제되었습니다.' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
