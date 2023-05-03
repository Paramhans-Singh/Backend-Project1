const express = require('express');
//  const so that it will not be ovewritten

const app = express();
const port = 8000;
//  at deploy level port number is 80

app.listen(port, function (err) {
    if (err) {
        // console.log('Error is running');
        console.log(`Error in running th server: ${err}`);
        //  used ` it is backtick and in this we can include the variable part too with ${} this method is know as interpolation 
    }
    console.log(`Server is running on the port: ${port}`);
});