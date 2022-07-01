import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();


mongoose.connect(process.env.DB_CONNECTION_URI);


// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen(process.env.PORT, () => {
    console.log( `server started at http://localhost:${process.env.PORT}` );
} );