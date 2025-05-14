const { JobPost } = require('../models');

exports.createJobPost = async (req, res) => {
  try {
    const jobPost = await JobPost.create(req.body);
    res.status(201).json(jobPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllJobPosts = async (req, res) => {
  try {
    const jobPosts = await JobPost.findAll();
    res.json(jobPosts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getJobPostById = async (req, res) => {
  try {
    const jobPost = await JobPost.findByPk(req.params.id);
    if (!jobPost) return res.status(404).json({ error: 'Not found' });
    res.json(jobPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateJobPost = async (req, res) => {
  try {
    const jobPost = await JobPost.findByPk(req.params.id);
    if (!jobPost) return res.status(404).json({ error: 'Not found' });

    await jobPost.update(req.body);
    res.json(jobPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteJobPost = async (req, res) => {
  try {
    const jobPost = await JobPost.findByPk(req.params.id);
    if (!jobPost) return res.status(404).json({ error: 'Not found' });

    await jobPost.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
