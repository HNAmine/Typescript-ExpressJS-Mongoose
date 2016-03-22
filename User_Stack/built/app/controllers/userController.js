var UserModel = require('../models/userModel');
var repository = UserModel.repository;
function createUser(req, res) {
    repository.create(req.body, function (error) {
        if (error) {
            res.send(400);
        }
        else {
            res.json(req.body);
        }
    });
}
exports.createUser = createUser;
function allUser(req, res) {
    repository.find(function (error, users) {
        if (error) {
            res.send(400);
        }
        else {
            res.json(users);
        }
    });
}
exports.allUser = allUser;
function findUserById(req, res, next) {
    repository.findById(req.params.userId, function (error, user) {
        if (error) {
            res.send(error);
        }
        else if (user) {
            req.user = user;
            next();
        }
        else
            res.send('No user found');
    });
}
exports.findUserById = findUserById;
function getUserById(req, res, next) {
    res.json(req.user);
}
exports.getUserById = getUserById;
function deleteUser(req, res) {
    repository.remove(req.user, function (error) {
        if (error)
            res.send(error);
        else
            res.status(200).send('User Removed');
    });
}
exports.deleteUser = deleteUser;
function updateUser(req, res) {
    req.user.nom = req.body.nom;
    req.user.prenom = req.body.prenom;
    req.user.age = req.body.age;
    req.user.save(function (error, user) {
        if (error)
            res.send(error);
        else
            res.status(200).send(user);
    });
}
exports.updateUser = updateUser;
function updatePeaceUser(req, res) {
    if (req.user._id)
        delete req.user._id;
    for (var p in req.body) {
        req.user[p] = req.body[p];
    }
    req.user.save(function (error, user) {
        if (error)
            res.send(error);
        else
            res.status(200).send(user);
    });
}
exports.updatePeaceUser = updatePeaceUser;
//# sourceMappingURL=userController.js.map