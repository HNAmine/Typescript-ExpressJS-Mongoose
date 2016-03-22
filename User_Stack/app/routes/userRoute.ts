import express = require('express');
import controller = require('../controllers/userController');


export function create(req:express.Request, res:express.Response) {
    controller.createUser(req, res);
}

export function all(req:express.Request, res:express.Response) {
    controller.allUser(req, res);
}

export function findById(req:express.Request, res:express.Response, next:express.NextFunction) {
    controller.findUserById(req, res, next);
}

export function getById(req:express.Request, res:express.Response) {
    controller.getUserById(req, res);
}

export function deleteUser(req:express.Request, res:express.Response) {
    controller.deleteUser(req, res);
}

export function updateUser(req:express.Request, res:express.Response) {
    controller.updateUser(req, res);
}

export function updatePeaceUser(req:express.Request, res:express.Response) {
    controller.updatePeaceUser(req, res);
}