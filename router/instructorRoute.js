const express = require('express');
const { addData, getAll } = require('../controller/instructorController');

const instructorRouter = express.Router();
//CREATE A PRODUCT
router.post('/add', addData);
router.get('/all', getAll);

module.exports = instructorRouter;
