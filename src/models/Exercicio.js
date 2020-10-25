const mongoose = require('mongoose');

const ExercicioSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
        required: true
    },
    trainName: {
        type: String,
        trim: true,
        required: true
    },
    exerciseId: {
        type: String,
        trim: true,
        required: true
    },
    series: {
        type: String,
        trim: true,
        required: true
    },
    qty: {
        type: String,
        trim: true,
        required: true
    },
    unity: {
        type: String,
        trim: true,
        required: true
    },
    additionalInfo: {
        type: String,
        trim: true,
        required: false
    },
    TipoTreino: {
        type: String,
        trim: true,
        required: true
    },

})

mongoose.model('Exercicios', ExercicioSchema);