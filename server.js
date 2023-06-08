const express = require('express');
const dotenv = require('dotenv');
const homeRouter = require('./routes/home');

dotenv.config({
    path: `./.env.${process.env.NODE_ENV || 'development'}`
});


const PORT = 3000;
const app = express();


app.use(homeRouter);


app.listen(PORT, () => {
    console.log(`Server has been started and listening port ${PORT}`);
});