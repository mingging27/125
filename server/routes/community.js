const express = require('express');
const router = express.Router();
const controller = require('../controllers/community.controller');

router.get('/', controller.getAllPosts);
router.get('/new', controller.getPostForm);
router.post('/new', controller.createPost);
router.get('/:id', controller.getPostDetail);
router.get('/:id/edit', controller.getEditForm);
router.post('/:id/edit', controller.updatePost);
router.post('/:id/delete', controller.deletePost);

router.post('/:postId/comment', controller.createComment);

module.exports = router;
