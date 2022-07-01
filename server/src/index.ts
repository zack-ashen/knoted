import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import auth from './routes/auth';
import user from './routes/user';


// setup app
const app = express();
app.use(morgan('dev')); // setup logging
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config(); // init .env

mongoose.connect(process.env.DB_CONNECTION_URI); // connect to database

// setup routes
app.use('/api/auth', auth);
app.use('/api/user', user);

// start server
app.listen(process.env.PORT, () => {
    console.log(`Server started at http://localhost:${process.env.PORT}`);
} );