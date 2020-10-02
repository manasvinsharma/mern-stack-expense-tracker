const express = require('express');
const dotenv = require('dotenv');
// const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({path:'./config/config.env'});

connectDB();

const transactions = require('./routes/transactions'); // transactions naam ka collection banega db me 

const app = express();

app.use(express.json());// used when we have post request in application

app.use('/api/v1/transactions',transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port number ${PORT}`))