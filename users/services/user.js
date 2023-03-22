const express = require("express");
const bcrypt = require('bcryptjs');
const Users = require("../models/users");
const jwt = require('jsonwebtoken');

module.exports = {
    create,
    getAllUsers,
    getOne,
    login
};

async function create(params) {
    if(await Users.findOne({ email : params.email})) {
        throw 'Email is already taken';
    }

    const users = new Users(params);
    if(params.password) {
        users.password = bcrypt.hashSync(params.password, 10);
    }

    await users.save();
}

async function getAllUsers() {
    return await Users.find();
}

async function getOne(id) {
    return await Users.findById(id);
}

function generateAccessToken(payload) {
    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '10000s' });
}

async function login(params) {
    var user = await Users.findOne({ email : params.email});

    if(!user) {
        throw 'User doesn\'t exist';
    }
    const isMatch = await bcrypt.compareSync(params.password, user.password);

    if (!isMatch)
        throw 'Incorrect Password';

    const payload = {
        user: {
            id: user.id
        }
    };

    const token = generateAccessToken(payload);
    const userData = { user, token : token }
    
    return await userData;
}