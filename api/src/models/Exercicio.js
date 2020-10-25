const mongoose = require('mongoose');

const ExercicioSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        default: '',
        required:true
    },
    category:{
        type: String,
        trim: true,
        required:true
    },

})

mongoose.model('Exercicios', ExercicioSchema);