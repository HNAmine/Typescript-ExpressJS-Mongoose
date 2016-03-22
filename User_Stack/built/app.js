var express = require('express');
var user = require('./app/routes/userRoute');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
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
//# sourceMappingURL=app.js.map