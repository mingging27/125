const express = require('express');
const router = express.Router();
const infoPostController = require('../controllers/infoPost.controller');

// 전체 글 조회
router.get('/', infoPostController.getAllInfoPosts);

// 특정 글 상세 조회회
router.get('/:id', infoPostController.getInfoPostById);

module.exports = router;