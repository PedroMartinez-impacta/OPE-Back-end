const mongoose = require('mongoose');
mongooseAutoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection('mongodb+srv://admin:admin@ope.9fmou.mongodb.net/<dbname>?retryWrites=true&w=majority');

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

});
ExercicioSchema.plugin(mongooseAutoIncrement.plugin, 'Exercicios');

ExercicioSchema.plugin(mongooseAutoIncrement.plugin, {
    model: 'Exercicios',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});
mongoose.model('Exercicios', ExercicioSchema);