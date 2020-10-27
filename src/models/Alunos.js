const mongoose = require('mongoose');
mongooseAutoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection('mongodb+srv://admin:admin@ope.9fmou.mongodb.net/<dbname>?retryWrites=true&w=majority');

mongooseAutoIncrement.initialize(connection);

const AlunoSchema = new mongoose.Schema({
    alunoId: {
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
    },
    contact: {
        type: String,
        lowercase: true,
        trim: true,
    },
    train_id: {
        type: String,
        trim: true,
    },
    train_name: {
        type: String,
        trim: true,
    },
    gender:{
        type: String,
        trim: true
    }
});
AlunoSchema.plugin(mongooseAutoIncrement.plugin, 'Alunos');

AlunoSchema.plugin(mongooseAutoIncrement.plugin, {
    model: 'Alunos',
    field: 'alunoId',
    startAt: 1,
    incrementBy: 1
});
mongoose.model('Alunos', AlunoSchema);