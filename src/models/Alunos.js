const mongoose = require('mongoose');

mongooseAutoIncrement = require('mongoose-auto-increment');

const AlunoSchema = new mongoose.Schema({
    id: {
        type: Number,
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

AlunoSchema.plugin(mongooseAutoIncrement.plugin, { model: 'Aluno', field: 'id', startAt: 1, incrementBy: 1 })
mongoose.model('Alunos', AlunoSchema);