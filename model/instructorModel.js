import mongoose from 'mongoose';

const instructorSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		phone: { type: String, required: true },
		address: { type: String, required: true },
		status: { type: String, required: true },
	},
	{ timestamps: true },
);

const instructor = mongoose.model('instructor', instructorSchema);
export default instructor;
