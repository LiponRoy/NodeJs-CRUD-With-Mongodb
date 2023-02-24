import express from 'express';
import dotEnv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import instructorRouter from './router/instructorRoute';
const app = express();
dotEnv.config();

//middlewares
app.use(express.json());
app.use(cors());

// Routers
app.use('/data', instructorRouter);

const connect = async () => {
	try {
		mongoose.set('strictQuery', false);
		await mongoose.connect(process.env.MONGO);
		console.log('Connected to mongoDB.');
	} catch (error) {
		throw error;
	}
};
mongoose.connection.on('disconnected', () => {
	console.log('mongoDB disconnected!');
});

const port = process.env.PORT;
app.listen(port, () => {
	connect();
	const myApp = `App is running on port : ${port}`;
	console.log(myApp);
});
