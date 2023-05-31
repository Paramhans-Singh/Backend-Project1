const express = require('express');
//  const so that it will not be ovewritten

const app = express();
const port = 8000;
//  at deploy level port number is 80

// layouts deploy
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
//extract style and scripts from sub into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// static files binding
app.use(express.static('./assets'));

//  use router module 
app.use('/', require('./routes/index'));

//  set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, function (err) {
    if (err) {
        // console.log('Error is running');
        console.log(`Error in running th server: ${err}`);
        //  used ` it is backtick and in this we can include the variable part too with ${} this method is know as interpolation 
    }
    console.log(`Server is running on the port: ${port}`);
});


//  for warning of LF to CRLF --> git config core.autocrlf true 