const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(userRoutes);

app.use((req,res,next)=> {
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: ''});
});


app.listen(4000); 