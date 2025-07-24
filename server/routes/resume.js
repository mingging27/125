// routes/resume.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const resumeController = require('../controllers/resume.controller');

// POST /api/resumes
router.post('/', authMiddleware, resumeController.createResume);

// GET /api/resumes
router.get('/', authMiddleware, resumeController.getAllResumes);

// GET /api/resumes/:resumeId
router.get('/:resumeId', authMiddleware, resumeController.getResumeById);

// PUT /api/resumes/:resumeId
router.put('/:resumeId', authMiddleware, resumeController.updateResume);

// DELETE /api/resumes/:resumeId
router.delete('/:resumeId', authMiddleware, resumeController.deleteResume);

module.exports = router;
