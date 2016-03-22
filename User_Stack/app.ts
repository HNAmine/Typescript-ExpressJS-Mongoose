import express = require('express');
import * as user from './app/routes/userRoute';
import http = require('http');
import path = require('path');
import mongoose = require('mongoose');
import bodyParser = require('body-parser');


var port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/user');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/users/', user.create);
app.get('/users/', user.all);
app.use('/users/:userId', user.findById);
app.get('/users/:userId', user.getById);
app.delete('/users/:userId', user.deleteUser);
app.put('/users/:userId', user.updateUser);
app.patch('/users/:userId', user.updatePeaceUser);


app.listen(port, function () {
    console.log('Running on port : ' + port);
});
