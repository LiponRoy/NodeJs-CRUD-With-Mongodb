import express from 'express';
import { addData, getAll, updateData, deleteData } from '../controller/instructorController.js';

const instructorRouter = express.Router();
//CREATE A PRODUCT
instructorRouter.post('/add', addData);
instructorRouter.get('/all', getAll);
instructorRouter.put('/update/:id', updateData);
instructorRouter.delete('/delete/:id', deleteData);

export default instructorRouter;
