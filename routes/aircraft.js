var express = require('express');
var router = express.Router();
var aircraft_controller = require('../controllers/aircraft');

// GET request for list of all aircraft items
router.get('/', aircraft_controller.aircraft_view_all_Page);

// GET create aircraft page
router.get('/create', aircraft_controller.aircraft_create_Page);

/* GET update aircraft page */
router.get('/update', aircraft_controller.aircraft_update_Page);

/* GET delete aircraft page */
router.get('/delete', aircraft_controller.aircraft_delete_Page);

module.exports = router;