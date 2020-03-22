const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/users', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

router.post('/users', (request, response, next) => {
    console.log("redirecting");
    response.redirect('/');
});

router.get('/',(request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});

module.exports = router;