const express = require('express');
const router = express.Router();
const crudController = require('../internals/controllers/crudController');


// load all available datas
router.get('/', crudController.loadEverything);



// Create
router.post('/create', crudController.create);

module.exports = router;