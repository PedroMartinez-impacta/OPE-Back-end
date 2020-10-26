const mongoose = require('mongoose');
mongooseAutoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection('mongodb+srv://admin:admin@ope.9fmou.mongodb.net/<dbname>?retryWrites=true&w=majority');

const TreinoSchema = new mongoose.Schema({
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

TreinoSchema.plugin(mongooseAutoIncrement.plugin, 'Treinos');

TreinoSchema.plugin(mongooseAutoIncrement.plugin, {
    model: 'Treinos',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

mongoose.model('Treinos', TreinoSchema);