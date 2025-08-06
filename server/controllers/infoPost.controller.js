const { InfoPost, Scrap } = require("../models");

// 게시판에 따라 필요한 정보 db에서 불러오기
exports.getInfoPosts = async (req, res) => {
  try {
    const categoryFieldsMap = {
      info_trend: [
        "info_post_id",
        "title",
        "thumbnail",
        "summary",
        "published_at",
      ],
      info_edu: [
        "info_post_id",
        "title",
        "summary",
        "published_at",
        "source_url",
      ],
      info_recommend: [
        "info_post_id",
        "title",
        "content",
        "category",
        "published_at",
      ],
    };

    const { category } = req.query;
    const where = category ? { category } : {};
    const validCategories = Object.keys(categoryFieldsMap);

    if (category && !validCategories.includes(category)) {
      return res.status(400).json({ error: "유효하지 않은 category입니다." });
    }

    const attributes = category ? categoryFieldsMap[category] : undefined;

    const posts = await InfoPost.findAll({
      where,
      attributes,
      order: [["published_at", "DESC"]],
    });

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 게시글 상세 조회
exports.getInfoPostById = async (req, res) => {
  try {
    const infoPost = await InfoPost.findByPk(req.params.id);
    if (!infoPost) return res.status(404).json({ error: "Not found" });
    res.json(infoPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 게시글 스크랩
exports.scrapInfoPost = async (req, res) => {
  const userId = req.user?.id || 1; // 임시로 user_id = 1
  const postId = req.params.id;

  try {
    const [scrap, created] = await Scrap.findOrCreate({
      where: {
        user_id: userId,
        post_type: "info",
        info_post_id: postId,
      },
      defaults: {
        scrapped_at: new Date(),
        community_post_id: null,
        job_post_id: null,
      },
    });

    if (!created) {
      return res.status(400).json({ message: "이미 스크랩한 게시글입니다." });
    }

    res.status(201).json({ message: "스크랩 성공", scrap });
  } catch (err) {
    console.error("스크랩 오류:", err);
    res.status(500).json({ message: "스크랩 중 오류 발생" });
  }
};

// 게시글 스크랩 취소
exports.unscrapInfoPost = async (req, res) => {
  const userId = req.user?.id || 1;
  const postId = req.params.id;

  try {
    const deleted = await Scrap.destroy({
      where: {
        user_id: userId,
        post_type: "info", // info 게시판용
        info_post_id: postId,
      },
    });

    if (deleted === 0) {
      return res.status(404).json({ message: "스크랩이 존재하지 않습니다." });
    }

    res.status(200).json({ message: "스크랩 취소 성공" });
  } catch (err) {
    console.error("스크랩 취소 오류:", err);
    res.status(500).json({ message: "스크랩 취소 중 오류 발생" });
  }
};

// exports.createInfoPost = async (req, res) => {
//   try {
//     const infoPost = await InfoPost.create(req.body);
//     res.status(201).json(infoPost);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// exports.updateInfoPost = async (req, res) => {
//   try {
//     const infoPost = await InfoPost.findByPk(req.params.id);
//     if (!infoPost) return res.status(404).json({ error: 'Not found' });

//     await infoPost.update(req.body);
//     res.json(infoPost);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// exports.deleteInfoPost = async (req, res) => {
//   try {
//     const infoPost = await InfoPost.findByPk(req.params.id);
//     if (!infoPost) return res.status(404).json({ error: 'Not found' });

//     await infoPost.destroy();
//     res.json({ message: 'Deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
