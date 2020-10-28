const mongoose = require('mongoose');
mongooseAutoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection('mongodb+srv://admin:admin@ope.9fmou.mongodb.net/<dbname>?retryWrites=true&w=majority');

const TreinoSchema = new mongoose.Schema({
    exerciseId: {
        type: String,
        trim: true,
    },
    exerciseName: {
        type: String,
        trim: true
    },
    series: {
        type: String,
        trim: true,
    },
    duration: {
        type: String,
        trim: true,
    },
    day: {
        type: String,
        trim: true,
    },

});

const TreinoBoxSchema = new mongoose.Schema({
    treinId: {
        type: String,
        trim: true
    },
    treinName: {
        type: String,
        trim: true,
    },
    exercises: [TreinoSchema]
});

TreinoBoxSchema.plugin(mongooseAutoIncrement.plugin, 'Treinos');

TreinoBoxSchema.plugin(mongooseAutoIncrement.plugin, {
    model: 'Treinos',
    field: 'treinId',
    startAt: 1,
    incrementBy: 1
});

mongoose.model('Treinos', TreinoBoxSchema);