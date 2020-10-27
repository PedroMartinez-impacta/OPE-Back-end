const mongoose = require('mongoose');

const Exercicios = mongoose.model('Exercicios');

module.exports = {
    async index(req, res) {
        const exercicio = await Exercicios.find();

        return res.json(exercicio);
    },

    async store(req, res) {
        const exercicio = await Exercicios.create(req.body);

        return res.json(exercicio);

    },

    async update(req, res) {
        const exercicio = await
            Exercicios.findOneAndUpdate({ "exerciseId": req.params.id }, req.body, {
                new:
                    true
            })

        return res.json(exercicio);

    },
    async delete(req, res) {
        await Exercicios.findOneAndDelete({ "exerciseId": req.params.id });

        return res.send();

    },
    // async showone(req,res){
    //     const exercicio = await Exercicios.findById(req.params.id);
    //     return res.json(exercicio);
    // }

    async showone(req, res) {
        const exercicio = await Exercicios.findOne({ "exerciseId": req.params.id });

        return res.json(exercicio)
    }

};