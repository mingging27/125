const express = require('express');
const router = express.Router();
const jobPostController = require('../controllers/jobPost.controller');

router.post('/', jobPostController.createJobPost);
router.get('/', jobPostController.getAllJobPosts);
router.get('/:id', jobPostController.getJobPostById);
router.put('/:id', jobPostController.updateJobPost);
router.delete('/:id', jobPostController.deleteJobPost);

module.exports = router;