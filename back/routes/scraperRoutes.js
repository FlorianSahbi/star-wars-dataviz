'use strict';

const express = require('express');
const router = express.Router();

const scraperController = require('../controllers/scraperController');

router.route('/getSetsImage')
    .get(scraperController.getSetsImageAction);


module.exports = router;