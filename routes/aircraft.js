
var express = require('express');
var router = express.Router();
var aircraft_controller = require('../controllers/aircraft'); // <--- Ensure this line is here

// GET create aircraft page
router.get('/create', aircraft_controller.aircraft_create_Page);

// ... rest of your routes
module.exports = router;
/* GET update aircraft page */
router.get('/update', aircraft_controller.aircraft_update_Page);
/* GET delete aircraft page */
router.get('/delete', aircraft_controller.aircraft_delete_Page);