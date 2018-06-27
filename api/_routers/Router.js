'use strict';


const express = require('express');
const router = express.Router();
const Controller = require('../controllers/ModelController');

router.get('/', Controller.get_methode);

router.post('/', Controller.post_methode);


module.exports = router;
