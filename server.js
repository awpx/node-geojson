const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const dbConnect = require('./db/dbconnect')

const app = express();
const PORT = process.env.PORT || 5000;

//body parser and cors
app.use(express.json());
app.use(cors());

//Connect to DB
dbConnect();

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api/v1/stores', require('./routes/stores'));



app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})