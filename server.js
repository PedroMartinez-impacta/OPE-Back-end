const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


mongoose.connect('mongodb+srv://admin:admin@ope.9fmou.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models');

const app = express();

app.use(express.json());
app.use(cors());





app.use('/auth', require('./src/authenticateRoutes'))
app.use('/', require('./src/routes'))
app.listen(process.env.PORT || 3001);
