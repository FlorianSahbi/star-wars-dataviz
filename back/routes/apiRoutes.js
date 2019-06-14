'use strict';

const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiControllers');

router.route('/interactions')
    .get(apiController.getAllInteractionsAction);

router.route('/radarData/:characterId/episode/:episodeId')
    .get(apiController.getRadarDataAction)

router.route('/interactions/:characterName')
    .get(apiController.getInteractionAction);

router.route('/interaction/:episodeId')
    .get(apiController.getInteractionByEpisodeIdAction);

module.exports = router;