import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './models/subscribers.js';

dotenv.config();

const app = express();

// const URL = process.env.DATABASE_URL;
const URI = process.env.DATABASE_URI;
mongoose.connect(URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

app.use(express.json());

app.use('/subscribers', router);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
