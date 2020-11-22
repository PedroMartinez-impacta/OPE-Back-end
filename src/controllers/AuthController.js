const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth')


const User = mongoose.model('Users');

const { authenticate } = require('passport');

const router = express.Router();

module.exports = {
    async register(req, res) {
        const { email } = req.body;

        try {
            if (await User.findOne({ email }))
                return res.status(400).send({ error: 'User already exists' });

            const user = await User.create(req.body);

            user.password = undefined;

            const token = jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: 86400
            });

            return res.send({ user, token })

        } catch (err) {
            console.log(err)
            return res.status(400).send({ error: 'Registration failed' })
        }
    },

    async authenticate(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user)
            return res.status(400).send({ error: 'User not found' });

        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: 'Invalid password' });

        user.password = undefined;

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400
        });

        res.send({ user, token });

    }

}

// module.exports = app => app.user('/auth', router)