const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    meal : {type: String, required: true},
    calories : {type: Number, required: true},
    user: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    created_at : {type: Date, default: Date.now},
    deleted_at : {type: Date}
});

module.exports = mongoose.model('meals', MealSchema);