const express = require('express');

const router = express.Router();
const userList = [];

router.get('/users', (req,res,next)=> {
    res.render('list-user', {pageTitle: 'User List', users: userList, path: '/users'});
});

router.get('/', (req,res,next) => {
    res.render('add-user', {pageTitle: 'Add User', path: '/'});
});

router.post('/', (req,res,next) => {
    userList.push({ name: req.body.name });
    res.redirect('/users');
});

module.exports=router;