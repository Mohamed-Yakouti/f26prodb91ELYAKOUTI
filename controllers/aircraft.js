var Aircraft = require('../models/aircraft');

// List of all Aircrafts
exports.aircraft_list = async function(req, res) {    
    try {
        theAircrafts = await Aircraft.find();
        res.send(theAircrafts);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Aircraft.
exports.aircraft_detail = function(req, res) {    
    res.send('NOT IMPLEMENTED: Aircraft detail: ' + req.params.id);
};

// Handle Aircraft create on POST.
exports.aircraft_create_post = async function(req, res) {    
    console.log(req.body);
    let document = new Aircraft();
    
    document.aircraft_type = req.body.aircraft_type;
    document.capacity = req.body.capacity;
    document.cruising_speed = req.body.cruising_speed;
    
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Aircraft delete from on DELETE.
exports.aircraft_delete = function(req, res) {    
    res.send('NOT IMPLEMENTED: Aircraft delete DELETE ' + req.params.id);
};

// Handle Aircraft update form on PUT.
exports.aircraft_update_put = function(req, res) {    
    res.send('NOT IMPLEMENTED: Aircraft update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.aircraft_view_all_Page = async function(req, res) {    
    try {
        theAircrafts = await Aircraft.find();
        res.render('aircraft', { title: 'Aircraft Search Results', results: theAircrafts });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
exports.aircraft_detail = async function(req, res) {
    console.log("detail " + req.params.id)
    try {
        let result = await Aircraft.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found}`);
    }
};
exports.aircraft_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        let result = await Aircraft.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle aircraft delete on DELETE.
exports.aircraft_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        let result = await Aircraft.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.aircraft_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try {
        let result = await Aircraft.findById(req.query.id)
        res.render('aircraftdetail', { title: 'Aircraft Detail', toShow: result });
    } catch(err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle aircraft update form on PUT.
exports.aircraft_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Aircraft.findById(req.params.id)
        if(req.body.aircraft_type) toUpdate.aircraft_type = req.body.aircraft_type;
        if(req.body.capacity) toUpdate.capacity = req.body.capacity;
        if(req.body.cruising_speed) toUpdate.cruising_speed = req.body.cruising_speed;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed}`);

    }
};
exports.aircraft_create_Page = function(req, res) {
    console.log("create view");
    try {
        res.render('aircraftcreate', { title: 'Aircraft Create' });
    } catch(err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the update view
exports.aircraft_update_Page = async function(req, res) {
    console.log("update view for id " + req.query.id)
    try {
        let result = await Aircraft.findById(req.query.id)
        res.render('aircraftupdate', { title: 'Aircraft Update', toShow: result });
    } catch(err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id specified by query
exports.aircraft_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        let result = await Aircraft.findById(req.query.id)
        res.render('aircraftdelete', { title: 'Aircraft Delete', toShow: result });
    } catch(err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};