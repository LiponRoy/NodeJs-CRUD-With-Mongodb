import express from 'express';
import dotEnv from 'dotenv';
const app = express();
dotEnv.config();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const port = 6000;

app.listen(port, () => {
	const myApp = `App is running on port : ${port}`;
	console.log(myApp);
});
