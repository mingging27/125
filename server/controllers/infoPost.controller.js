const { InfoPost } = require('../models');

exports.createInfoPost = async (req, res) => {
  try {
    const infoPost = await InfoPost.create(req.body);
    res.status(201).json(infoPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllInfoPosts = async (req, res) => {
  try {
    const infoPosts = await InfoPost.findAll();
    res.json(infoPosts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getInfoPostById = async (req, res) => {
  try {
    const infoPost = await InfoPost.findByPk(req.params.id);
    if (!infoPost) return res.status(404).json({ error: 'Not found' });
    res.json(infoPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateInfoPost = async (req, res) => {
  try {
    const infoPost = await InfoPost.findByPk(req.params.id);
    if (!infoPost) return res.status(404).json({ error: 'Not found' });

    await infoPost.update(req.body);
    res.json(infoPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteInfoPost = async (req, res) => {
  try {
    const infoPost = await InfoPost.findByPk(req.params.id);
    if (!infoPost) return res.status(404).json({ error: 'Not found' });

    await infoPost.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
