const express = require('express');

const app = express();

app.use('/',(request, response, next) => {
    console.log('Entry point for all routes');
    next();
});

app.use('/users',(request, response, next) => {
    console.log('Users Path');
    response.send('<h1>Welcome to User Page</h1>')
});

app.use('/',(request, response, next) => {
    console.log('Default Path');
    response.send('<h1>Welcome to Home Page</h1>')
});

app.listen(5000);