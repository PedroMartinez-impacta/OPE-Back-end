const mongoose = require ('mongoose');

const Treinos = mongoose.model('Treinos');

module.exports = {
    async index(req, res){
        const treino = await Treinos.find();

        for(let train of treino){
            train._id = -1;
        }

        return res.json(treino);
    },

    async store(req, res){
        const treino = await Treinos.create(req.body);
        
        return res.json(treino);
        
    },
    
    async update(req,res){
        const treino = await 
        Treinos.findByIdAndUpdate(req.params.id, req.body, { new: 
            true})
            
            return res.json(treino);

    },
    async delete(req,res){
        await Treinos.findByIdAndDelete(req.params.id);

        return res.send();

    },
    async showone(req, res) {
        const treino = await Alunos.findOne({ "id": req.params.id });

        treino._id = -1

        return res.json(treino)
    }

};