const express = require('express');
const router = require('./routes/index');

const app = express();

const HOST = 'localhost';
const PORT = 5000;

app.use('/', router);


app.listen(PORT, HOST,()=>{
    console.log(`server has been started on port ${PORT}`)
})