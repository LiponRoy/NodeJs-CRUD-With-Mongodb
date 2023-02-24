import mongoose from 'mongoose';
import instructorModel from '../model/instructorModel';

//Create new data
export const addData = async (req, res, next) => {
	const { name, email, phone, address, status } = req.body;
	try {
		const instructorData = new instructorModel({ name, email, phone, address, status });
		const savedData = await instructorData.save();
		res.status(200).send(savedData);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

// getting all of data
export const getAll = async (req, res, next) => {
	try {
		const All = instructorModel.find();
		res.status(200).send(All);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

// module.exports = { addData, getAll };
