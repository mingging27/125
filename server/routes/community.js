// const express = require('express');
// const router = express.Router();
// const controller = require('../controllers/community.controller');

// router.get('/', controller.getAllPosts);
// router.get('/new', controller.getPostForm);
// router.post('/new', controller.createPost);
// router.get('/:id', controller.getPostDetail);
// //router.get('/:id/edit', controller.getEditForm);
// router.post('/:id/edit', controller.updatePost);
// router.post('/:id/delete', controller.deletePost);

// router.post('/:postId/comment', controller.createComment);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const controller = require('../controllers/community.controller');

// router.get('/', controller.getAllPosts);
// //router.get('/new', controller.getPostForm); // 폼 API가 필요 없으면 삭제 가능
// router.post('/new', controller.createPost);
// router.get('/:id', controller.getPostDetail);

// // 수정 폼 라우트가 없으면 404 정상
// // router.get('/:id/edit', controller.getEditForm);

// router.put('/:id', controller.updatePost);       // RESTful하게 PUT으로 수정
// router.delete('/:id', controller.deletePost);    // RESTful하게 DELETE로 삭제

// router.post('/:postId/comment', controller.createComment);

// module.exports = router;

const express = require('express');
const router = express.Router();
const controller = require('../controllers/community.controller');

// 게시글 전체 목록 조회
router.get('/', controller.getAllPosts);

// 게시글 작성 (POST)
router.post('/create', controller.createPost);

// 게시글 상세 보기 (댓글 포함)
router.get('/:id', controller.getPostDetail);

// 게시글 수정 (POST로 요청 - /:id/edit)
//router.post('/:id/edit', controller.updatePost);

// 게시글 수정용 데이터 조회 (edit용 json)
router.get('/:id/edit', controller.editPost);

// 게시글 삭제 (POST 방식 사용)
router.get('/:id/delete', controller.deletePost);

// 댓글 작성 (get, 게시글 ID 필요)
router.post('/:postId/comments', controller.createComment);

// 좋아요
router.post('/:id/like', controller.likePost);      // 좋아요 추가
router.delete('/:id/like', controller.unlikePost);  // 좋아요 취소

// 게시글 스크랩
router.post("/:postId/scrap", controller.scrapCommunityPost);

// 게시글 스크랩 취소
router.delete("/:postId/scrap", controller.unscrapCommunityPost);


module.exports = router;

