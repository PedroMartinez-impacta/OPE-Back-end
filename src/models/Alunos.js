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
    document: {
        type: String,
        trim: true,
    },
    birth_day: {
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
    contact: {
        type: String,
        lowercase: true,
        trim: true,
        //index: true,
        //unique: false,
        //required: false// por enquanto 
    },
    train_id: {
        type: String,
        trim: true,
    },
    train_name: {
        type: String,
        trim: true,
    },
})

mongoose.model('Alunos', AlunoSchema);