const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');

router.get('/movieTrending', mediaController.getTrendingMovies);
router.get('/allTrending', mediaController.getTrending);
router.get('/popularMovies', mediaController.getPopularMovies);
router.get('/popularShows', mediaController.getPopularShows);
router.get('/trendingShows', mediaController.getTrendingShows);

module.exports = router;