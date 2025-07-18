const { JobPost } = require('../models');


exports.getAllJobPosts = async (req, res) => {
  try {
    const jobPosts = await JobPost.findAll({
      attributes: [
        'job_post_id',
        'company',
        'title',
        'job_field',
        'location_city',
        'employment_type'
      ],
      order: [['created_at', 'DESC']]
    });

    res.json(jobPosts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '채용 목록 조회 실패' });
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

// exports.createJobPost = async (req, res) => {
//   try {
//     const jobPost = await JobPost.create(req.body);
//     res.status(201).json(jobPost);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// exports.updateJobPost = async (req, res) => {
  //   try {
    //     const jobPost = await JobPost.findByPk(req.params.id);
    //     if (!jobPost) return res.status(404).json({ error: 'Not found' });
    
    //     await jobPost.update(req.body);
    //     res.json(jobPost);
    //   } catch (err) {
      //     res.status(400).json({ error: err.message });
//   }
// };

// exports.deleteJobPost = async (req, res) => {
//   try {
//     const jobPost = await JobPost.findByPk(req.params.id);
//     if (!jobPost) return res.status(404).json({ error: 'Not found' });

//     await jobPost.destroy();
//     res.json({ message: 'Deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
