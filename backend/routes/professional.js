const express = require('express');

const professionalsController = require('../controllers/professional');

const router = express.Router();

// GET /feed/posts
router.get('/', professionalsController.getData);
// localhost:8080/professional/
module.exports = router;