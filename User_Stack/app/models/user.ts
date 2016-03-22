export class User {
    nom:String;
    prenom:String;
    age:Number;

    constructor(nom:String, prenom:String, age:Number) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    nomComplet() {
        return this.nom + ' - ' + this.prenom;
    }
}