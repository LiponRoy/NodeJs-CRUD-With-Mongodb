import mongoose from 'mongoose';

const instructorSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		phone: { type: String, required: true },
		address: { type: Number, required: true },
		status: { type: Object, required: true },
	},
	{ timestamps: true },
);

module.exports = mongoose.model('instructor', instructorSchema);
