const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    id: {
        default: "",
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
        default: ''
    },
    document: {
        type: String,
        trim: true,
        default: ''
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
        default: ''
    },
    active: {
        type: Boolean,
        default: true
    },
})

mongoose.model('Alunos', AlunoSchema);