import express from 'express';
import { addData, getAll, getOneData, updateData, deleteData } from '../controller/instructorController.js';

const instructorRouter = express.Router();
//adding data
instructorRouter.post('/add', addData);
//getting all data
instructorRouter.get('/all', getAll);
//getting single data
instructorRouter.get('/getOne/:id', getOneData);
//update data
instructorRouter.put('/update/:id', updateData);
//delete data
instructorRouter.delete('/delete/:id', deleteData);

export default instructorRouter;
