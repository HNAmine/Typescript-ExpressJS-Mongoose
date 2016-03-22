var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mongoose = require('mongoose');
exports.userSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    age: Number
});
var IUser = (function (_super) {
    __extends(IUser, _super);
    function IUser(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    IUser.prototype.nomComplet = function () {
        return this.nom + ' - ' + this.prenom;
    };
    return IUser;
})(mongoose.Document);
exports.IUser = IUser;
exports.repository = mongoose.model("User", exports.userSchema);
//# sourceMappingURL=userModel.js.map