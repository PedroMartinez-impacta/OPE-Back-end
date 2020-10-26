const mongoose = require('mongoose');
mongooseAutoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection('mongodb+srv://admin:admin@ope.9fmou.mongodb.net/<dbname>?retryWrites=true&w=majority');

const ExercicioSchema = new mongoose.Schema({
    id:{
        type: String
    },
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
});
ExercicioSchema.plugin(mongooseAutoIncrement.plugin, 'Exercicios');

ExercicioSchema.plugin(mongooseAutoIncrement.plugin, {
    model: 'Exercicios',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});
mongoose.model('Exercicios', ExercicioSchema);