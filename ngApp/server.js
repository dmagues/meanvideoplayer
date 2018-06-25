const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const api = require('./server/routes/api');
const config  =require('./server/config/database');

// Connect to database
mongoose.Promise = global.Promise;
mongoose.connect(config.database);
// On Connected
mongoose.connection.on("connected", () => {
    console.log('Connected to database '+config.database);
})
// On Error
mongoose.connection.on("error", (er) => {
    console.log('Database error: '+er);
})

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// routes
app.use('/api', api);
app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));    
});

app.listen(port,()=>{
    console.log("Server running on port: " + port);
});
