const express = require('express');
const router = express.Router();
const infoPostController = require('../controllers/infoPost.controller');

router.post('/', infoPostController.createInfoPost);
router.get('/', infoPostController.getAllInfoPosts);
router.get('/:id', infoPostController.getInfoPostById);
router.put('/:id', infoPostController.updateInfoPost);
router.delete('/:id', infoPostController.deleteInfoPost);

module.exports = router;