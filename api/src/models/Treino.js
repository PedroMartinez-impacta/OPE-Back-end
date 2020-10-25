const mongoose = require('mongoose');

const TreinoSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
})

mongoose.model('Treinos', TreinoSchema);