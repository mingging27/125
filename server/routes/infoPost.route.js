const express = require("express");
const router = express.Router();
const infoPostController = require("../controllers/infoPost.controller");
// 카테고리에(support, edu, trend, recomment) 따른 전체 글 조회
router.get("/", infoPostController.getInfoPosts);
// 특정 글 상세 조회
router.get("/:id", infoPostController.getInfoPostById);
// 게시글 스크랩
router.post("/:id/scrap", infoPostController.scrapInfoPost);
// 게시글 스크랩 취소
router.delete("/:id/scrap", infoPostController.unscrapInfoPost);
module.exports = router;
