import mongoose = require('mongoose');

export var userSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    age: Number
});

export class IUser extends mongoose.Document {
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
/*
 export interface IUser extends mongoose.Document {
 nom:string;
 prenom:string;
 age:number;

 }*/

export var repository = mongoose.model<IUser>("User", userSchema);