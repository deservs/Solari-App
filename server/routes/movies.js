const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movieController');

router.get('/', moviesController.getTrendingMovies);

module.exports = router;