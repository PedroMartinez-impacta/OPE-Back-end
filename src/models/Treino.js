const mongoose = require('mongoose');
mongooseAutoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection('mongodb+srv://admin:admin@ope.9fmou.mongodb.net/<dbname>?retryWrites=true&w=majority');

const TreinoSchema = new mongoose.Schema({
    treinId: {
        type: String,
        trim: true,
    },
    trainName: {
        type: String,
        trim: true,
    },
    exerciseId: {
        type: String,
        trim: true,
    },
    series: {
        type: String,
        trim: true,
    },
    qty: {
        type: String,
        trim: true,
    },
    unity: {
        type: String,
        trim: true,
    },
    additionalInfo: {
        type: String,
        trim: true,
    },
    treinType: {
        type: String,
        trim: true,

    },
});

const TreinoBoxSchema = new mongoose.Schema({
    treinos: [TreinoSchema]
});

TreinoSchema.plugin(mongooseAutoIncrement.plugin, 'Treinos');

TreinoSchema.plugin(mongooseAutoIncrement.plugin, {
    model: 'Treinos',
    field: 'treinId',
    startAt: 1,
    incrementBy: 1
});

mongoose.model('Treinos', TreinoBoxSchema);