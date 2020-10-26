const mongoose = require('mongoose');
mongooseAutoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection('mongodb+srv://admin:admin@ope.9fmou.mongodb.net/<dbname>?retryWrites=true&w=majority');

const TreinoSchema = new mongoose.Schema({
    // treino: {
    //     type: Array
    // },
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

TreinoSchema.plugin(mongooseAutoIncrement.plugin, 'Treinos');

TreinoSchema.plugin(mongooseAutoIncrement.plugin, {
    model: 'Treinos',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

mongoose.model('Treinos', TreinoSchema);