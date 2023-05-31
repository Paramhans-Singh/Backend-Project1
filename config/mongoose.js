const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/codeial_development');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MogoDB"));

db.once('open',function(){
    console.log('Connected to Database');
});

module.exports = db;