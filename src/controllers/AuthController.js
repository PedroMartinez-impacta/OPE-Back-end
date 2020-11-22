const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')

const authConfig = require('../config/auth');


const User = mongoose.model('Users');

const { authenticate } = require('passport');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "opemailsender@gmail.com",
        pass: "mailsenderOPE0@"
    }
});

const router = express.Router();

async function gerarPassword() {
    return Math.random().toString(36).slice(-10);
}

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

        return res.send({user})

        if (!user)
            return res.status(400).send({ error: 'User not found' });

        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: 'Invalid password' });

        user.password = undefined;

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400
        });

        res.send({ user, token });

    },

    async rescue_password(req, res) {
        try {
            const { email } = req.body;

            const passwordToSendToEmail = await gerarPassword();

            const hash = await bcrypt.hash(passwordToSendToEmail, 10);

            const passwordToUpdate = hash;

            const update = {
                password: hash
            }

            // return console.log(update.password)


            const user = await User.findOneAndUpdate({ email }, update);

            //console.log(user)

            transporter.sendMail({
                from: "opemailsender@gmail.com",
                to: email,
                subject: "Recuperação de senha OPE",
                text: `Aqui está sua nova senha: ${passwordToSendToEmail}`
            }).then(message => {
                console.log(message)
            }).catch(err => {
                console.log(err)
            })

            res.send({ message: `Senha enviada para o email ${email}` });

        } catch (err) {
            console.log({error: err.stack})
        }

    }

}

// module.exports = app => app.user('/auth', router)