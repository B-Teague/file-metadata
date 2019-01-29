'use strict';

const express = require('express');
const router = express.Router();

// Require controller modules.
const uploadController = require('../controllers/upload');
const uploadMiddleware = require('../middleware/upload');

router.post('/', uploadMiddleware.MULTER, uploadController.UPLOAD);

module.exports = router;