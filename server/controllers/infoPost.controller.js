const { InfoPost } = require('../models');

// 게시판에 따라 필요한 정보 db에서 불러오기
exports.getInfoPosts = async (req, res) => {
  try {
    const categoryFieldsMap = {
      info_trend: ['info_post_id', 'title', 'thumbnail', 'summary', 'published_at'],
      info_edu: ['info_post_id', 'title', 'summary', 'published_at'],
      info_recommend: ['info_post_id', 'title', 'content', 'category', 'published_at'],
      info_support: [],
    }

    const {category} = req.query;
    const where = category ? {category} : {};
    const validCategories = Object.keys(categoryFieldsMap);

    if (category && !validCategories.includes(category)) {
      return res.status(400).json({ error: '유효하지 않은 category입니다.' });
    }

    const attributes = category ? categoryFieldsMap[category] : undefined;

    const posts = await InfoPost.findAll({
      where,
      attributes,
      order: [['published_at', 'DESC']],
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
    if (!infoPost) return res.status(404).json({ error: 'Not found' });
    res.json(infoPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
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
