const express = require("express");
const mealServices = require("../services/meal");

module.exports = {
    register,
    update,
    getById,
    getAll,
    deleteMeal
};

function register(req, res, next) {
    try {
        mealServices.create(req)
            .then(() => res.json({
                message: "Meal added successfully!"
            }))
            .catch(err => next(err));
    }
    catch (err) {
        res.json({message : err })
    }
}

function update(req, res, next) {
    try {
        mealServices.update(req)
            .then(() => res.json({
                message: "Meal updated successfully!"
            }))
            .catch(err => next(err));
    }
    catch (err) {
        res.json({message : err })
    }
}

function getById(req, res, next) {
    try {
        mealServices.getOne(req)
            .then(meal => res.json({meal}))
            .catch(err => next(err));
    }
    catch (err) {
        res.json({message : err })
    }
}


function getAll(req, res, next) {
    try {
        console.log(req.user)
        mealServices.getAll(req.user)
            .then(meals => res.json({meals}))
            .catch(err => next(err));
    }
    catch (err) {
        res.json({message : err })
    }
}

function deleteMeal(req, res, next) {
    try {
        mealServices.deleteMeal(req.params)
            .then(() => res.json({
                message: "Meal deleted successfully!"
            }))
            .catch(err => next(err));
    }
    catch (err) {
        res.json({message : err })
    }
}