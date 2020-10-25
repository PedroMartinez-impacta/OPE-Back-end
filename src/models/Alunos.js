const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    id: {
        type: Number,
        auto: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    age: {
        type: String,
        trim: true,
    },
    document: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        //index: true,
        //unique: false,
        //required: false// por enquanto 
    },
    train_plan: {
        type: String,
        trim: true,
    },
    active: {
        type: Boolean,
        default: true
    },
})

mongoose.model('Alunos', AlunoSchema);