const mongoose = require('mongoose');

const Exercicios = mongoose.model('Exercicios');

module.exports = {
    async index(req, res) {
        const exercicio = await Exercicios.find();

        for(let exercise of exercicio){
            exercise._id = -1;
        }

        return res.json(exercicio);
    },

    async store(req, res) {
        const exercicio = await Exercicios.create(req.body);

        return res.json(exercicio);

    },

    async update(req, res) {
        const exercicio = await
            Exercicios.findByIdAndUpdate(req.params.id, req.body, {
                new:
                    true
            })

        return res.json(exercicio);

    },
    async delete(req, res) {
        await Exercicios.findByIdAndDelete(req.params.id);

        return res.send();

    },
    // async showone(req,res){
    //     const exercicio = await Exercicios.findById(req.params.id);
    //     return res.json(exercicio);
    // }

    async showone(req, res) {
        const exercicio = await Exercicios.findOne({ "id": req.params.id });

        exercicio._id = -1

        return res.json(exercicio)
    }

};