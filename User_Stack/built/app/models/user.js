var User = (function () {
    function User(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    User.prototype.nomComplet = function () {
        return this.nom + ' - ' + this.prenom;
    };
    return User;
})();
exports.User = User;
//# sourceMappingURL=user.js.map