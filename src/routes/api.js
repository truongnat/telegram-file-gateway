const express = require('express');
const router = express.Router();
const telegramService = require('../services/telegram');
const auth = require('../middlewares/auth');

// Upload file/video
router.post('/upload', auth, async (req, res, next) => {
  try {
    const { fileUrl } = req.body;
    const result = await telegramService.uploadFile(fileUrl);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// Danh sách file/video (stub)
router.get('/files', auth, async (req, res) => {
  res.json({ files: [] });
});

// Lấy file/video theo id (stub)
router.get('/files/:id', auth, async (req, res) => {
  res.json({ id: req.params.id, file: null });
});

module.exports = router;