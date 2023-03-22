const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {type: String, required: true},
    email : {type: String, unique: true, required: true},
    password : {type: String, required: true},
    created_at : {type: Date, default: Date.now},
    deleted_at : {type: Date}
});

module.exports = mongoose.model('users', UserSchema);