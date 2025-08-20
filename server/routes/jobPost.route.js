const express = require('express');
const router = express.Router();
const jobPostController = require('../controllers/jobPost.controller');

// 전체 공고 조회
router.get('/', jobPostController.getAllJobPosts);

// 특정 공고 상세 조회
router.get('/:id', jobPostController.getJobPostById);

module.exports = router;