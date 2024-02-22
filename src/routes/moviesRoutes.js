const express = require('express');
const { getMoviesByYear } = require('../controllers/moviesController');
const validateYear = require('../middleware/validationMiddleware');

const router = express.Router();

router.get('/', validateYear, getMoviesByYear);

module.exports = router;