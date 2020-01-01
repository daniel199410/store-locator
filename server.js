const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

//Connect to db
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

//Routes
app.use('/api/v1/stores', require('./routes/stores'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));