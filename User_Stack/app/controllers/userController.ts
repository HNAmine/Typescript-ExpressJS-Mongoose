import express = require('express');
import mongoose = require('mongoose');
import UserModel = require('../models/userModel');
import {User} from '../models/user';
import repository = UserModel.repository;
import bodyParser = require('body-parser');


export function createUser(req:express.Request, res:express.Response) {
    repository.create(req.body, (error)=> {
        if (error) {
            res.send(400);
        }
        else {
            res.json(req.body);
        }
    });
}

export function allUser(req:express.Request, res:express.Response) {
    repository.find((error, users)=> {
        if (error) {
            res.send(400);
        }
        else {
            res.json(users);
        }
    });
}

// midelware
export function findUserById(req:express.Request, res:express.Response, next:express.NextFunction) {
    repository.findById(req.params.userId, (error, user)=> {
        if (error) {
            res.send(error);
        }
        else if (user) {
            req.user = user;
            next();
        }
        else res.send('No user found');
    });
}

export function getUserById(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.json(req.user);
}


export function deleteUser(req:express.Request, res:express.Response) {
    repository.remove(req.user, (error)=> {
        if (error)res.send(error);
        else res.status(200).send('User Removed');
    });
}

export function updateUser(req:express.Request, res:express.Response) {
    req.user.nom = req.body.nom;
    req.user.prenom = req.body.prenom;
    req.user.age = req.body.age;
    req.user.save((error, user)=> {
        if (error)res.send(error);
        else res.status(200).send(user);
    });
}

export function updatePeaceUser(req:express.Request, res:express.Response) {
    if (req.user._id)delete req.user._id;
    for (var p in req.body) {
        req.user[p] = req.body[p];
    }
    req.user.save((error, user)=> {
        if (error)res.send(error);
        else res.status(200).send(user);
    });
}






