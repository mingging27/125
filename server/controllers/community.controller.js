const { CommunityPost, Comment, User } = require('../models');

// 게시글 전체 조회
exports.getAllPosts = async (req, res) => {
  const posts = await CommunityPost.findAll();
  res.render('community/list', { posts });
};

// 게시글 작성 폼
exports.getPostForm = (req, res) => {
  res.render('community/form', { post: null });
};

// 게시글 작성
exports.createPost = async (req, res) => {
  try {
    const { title, content, user_id } = req.body;

    // 수동으로 ID를 넣기 위해 현재 가장 큰 ID 찾기
    const maxPost = await CommunityPost.findOne({
      order: [['community_post_id', 'DESC']]
    });

    const nextId = maxPost ? maxPost.community_post_id + 1 : 1;

    await CommunityPost.create({
      community_post_id: nextId,
      title,
      content,
      user_id,
      created_at: new Date(),
      like_count: 0
    });

    res.redirect('/community');
  } catch (error) {
    console.error(error);
    res.status(500).send('게시글 생성 중 오류 발생');
  }
};

// 게시글 상세 보기 (댓글 포함)
exports.getPostDetail = async (req, res) => {
  const postId = req.params.id;

  const post = await CommunityPost.findByPk(postId);

  const comments = await Comment.findAll({
    where: { post_type: 'community', post_id: postId },
    include: [{ model: User, attributes: ['username'] }],
    order: [['created_at', 'ASC']]
  });

  res.render('community/detail', { post, comments });
};

// 게시글 수정 폼
exports.getEditForm = async (req, res) => {
  const post = await CommunityPost.findByPk(req.params.id);
  res.render('community/form', { post });
};

// 게시글 수정
exports.updatePost = async (req, res) => {
  const { title, content } = req.body;
  await CommunityPost.update({ title, content }, {
    where: { community_post_id: req.params.id },
  });
  res.redirect('/community');
};

// 게시글 삭제
exports.deletePost = async (req, res) => {
  await CommunityPost.destroy({
    where: { community_post_id: req.params.id },
  });
  res.redirect('/community');
};

// 댓글 작성
exports.createComment = async (req, res) => {
  try {
    const userId = req.user.id; // 로그인 사용자 정보
    const postId = req.params.postId;
    const { content } = req.body;

    await Comment.create({
      post_type: 'community',
      post_id: postId,
      user_id: userId,
      content,
      created_at: new Date(),
    });

    res.redirect(`/community/${postId}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('댓글 작성 중 오류 발생');
  }
};
