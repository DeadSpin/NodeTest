const express = require("express");
const userServices = require("../services/user");

module.exports = {
    register,
    getAllUsers,
    getById,
    login
};

function register(req, res, next) {
    try {
        userServices.create(req.body)
            .then(() => res.json({
                message: "User created successfully!"
            }))
            .catch(err => next(err));
    }
    catch (err) {
        res.json({message : err })
    }
}

function getAllUsers(req, res, next) {
    try {
        userServices.getAllUsers()
            .then(users => res.json({users}))
            .catch(err => next(err));
    }
    catch (err) {
        res.json({message : err })
    }
}

function getById(req, res, next) {
    try {
        userServices.getOne(req.params.id)
            .then(user => res.json({user}))
            .catch(err => next(err));
    }
    catch (err) {
        res.json({message : err })
    }
}

function login(req, res, next) {
    try {
        userServices.login(req.body)
            .then(user => res.json(user))
            .catch(err => next(err));
    }
    catch (err) {
        res.json({message : err })
    }
}