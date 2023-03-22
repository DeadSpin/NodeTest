const express = require("express");
const Meal = require("../models/meals");
const User = require("../models/users");

module.exports = {
    create,
    getOne,
    update,
    getAll,
    deleteMeal
};

async function create(params) {
    const meals = new Meal(params.body);
    await meals.save();
    
    const user = await User.findById({_id: params.user.id})
    meals.user.push(user);
    await meals.save();
}

async function update(req) {
    await Meal.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    );
}

async function getOne(req) {
    return await Meal.findOne({ _id : req.params.id, user : req.user.id }).populate('user')
}

async function getAll(params) {
    return await Meal.find({ user : params.id }).populate('user')
}

async function deleteMeal(params) {
    await Meal.deleteOne({ _id : params.id })
}