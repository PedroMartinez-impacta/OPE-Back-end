const mongoose = require('mongoose');

const Treinos = mongoose.model('Treinos');

module.exports = {
    async index(req, res) {
        const treino = await Treinos.find();

        return res.json(treino);
    },

    async store(req, res) {
        const treino = await Treinos.create(req.body);

        return res.json(treino);

    },

    async update(req, res) {
        const treino = await
            Treinos.findByIdAndUpdate(req.params.id, req.body, {
                new:
                    true
            })

        return res.json(treino);

    },
    async delete(req, res) {
        await Treinos.findByIdAndDelete(req.params.id);

        return res.send();

    },
    async showone(req, res) {
        const treino = await Treinos.findOne({ "id": req.params.id });

        return res.json(treino)
    },

    // async deleteTrein(req, res) {

    //     let objectTreinos = await Treinos.findOne({ "_id": req.params.id });

    //     let update = objectTreinos.treinos.filter(item => item.treinId !== req.body.treinId);

    //     const objectToSend = { "treinos": update }

    //     update = objectToSend;

    //     const updateTreinos = await Treinos.findOneAndUpdate({ "_id": req.params.id }, update)

    //     return res.json(updateTreinos)
    // },
    
    async updateTrein(req, res) {

        //let objectTreinos = await Treinos.findOne({ "treinId": req.params.id });

        //objectTreinos.exercises.push(req.body.exercise);

        let update = req.body;

        //const objectToSend = { "exercises": update }

        //update = objectToSend;

        const updateTreinos = await Treinos.findOneAndUpdate({ "treinId": req.params.id }, update)

        return res.json(updateTreinos)
    }

};