var controller = require('../controllers/userController');
function create(req, res) {
    controller.createUser(req, res);
}
exports.create = create;
function all(req, res) {
    controller.allUser(req, res);
}
exports.all = all;
function findById(req, res, next) {
    controller.findUserById(req, res, next);
}
exports.findById = findById;
function getById(req, res) {
    controller.getUserById(req, res);
}
exports.getById = getById;
function deleteUser(req, res) {
    controller.deleteUser(req, res);
}
exports.deleteUser = deleteUser;
function updateUser(req, res) {
    controller.updateUser(req, res);
}
exports.updateUser = updateUser;
function updatePeaceUser(req, res) {
    controller.updatePeaceUser(req, res);
}
exports.updatePeaceUser = updatePeaceUser;
//# sourceMappingURL=userRoute.js.map