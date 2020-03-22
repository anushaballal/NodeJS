const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const userRoutes = require('./routes/userRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);

app.use((request, response, next) => {
    response.status(400).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(5000);