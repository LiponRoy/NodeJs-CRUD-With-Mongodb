import express from 'express';
import { addData, getAll } from '../controller/instructorController.js';

const instructorRouter = express.Router();
//CREATE A PRODUCT
instructorRouter.post('/add', addData);
instructorRouter.get('/all', getAll);

export default instructorRouter;
