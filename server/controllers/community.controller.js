const { CommunityPost } = require('../models');


exports.getAllPosts = async (req, res) => {
  const posts = await CommunityPost.findAll();
  res.render('community/list', { posts });
};

exports.getPostForm = (req, res) => {
  res.render('community/form', { post: null });
};

exports.createPost = async (req, res) => {
  try {
    const { title, content, user_id } = req.body;

    // 현재 가장 큰 community_post_id 찾기
    const maxPost = await CommunityPost.findOne({
      order: [['community_post_id', 'DESC']]
    });

    const nextId = maxPost ? maxPost.community_post_id + 1 : 1;

    await CommunityPost.create({
      community_post_id: nextId,  // 수동으로 ID 넣기
      title,
      content,
      user_id,
      created_at: new Date(),     // created_at도 수동 입력
      like_count: 0               // 기본값으로 설정
    });

    res.redirect('/community');
  } catch (error) {
    console.error(error);
    res.status(500).send('게시글 생성 중 오류 발생');
  }
};


exports.getPostDetail = async (req, res) => {
  const post = await CommunityPost.findByPk(req.params.id);
  res.render('community/detail', { post });
};

exports.getEditForm = async (req, res) => {
  const post = await CommunityPost.findByPk(req.params.id);
  res.render('community/form', { post });
};

exports.updatePost = async (req, res) => {
  const { title, content } = req.body;
  await CommunityPost.update({ title, content }, {
    where: { community_post_id: req.params.id },
  });
  res.redirect('/community');
};

exports.deletePost = async (req, res) => {
  await CommunityPost.destroy({
    where: { community_post_id: req.params.id },
  });
  res.redirect('/community');
};
