const mongoose = require('mongoose');

const Alunos = mongoose.model('Alunos');

module.exports = {
    async index(req, res) {
        try{
            const aluno = await Alunos.find();
    
            for(let person of aluno){
                person._id = -1;
            }

            return res.json(aluno);

        }catch(error){
            return res.status(500).end(String(error.message || error));
        }
    },

    async store(req, res) {
        try{
            
            const aluno = await Alunos.create(req.body);
    
            return res.json(aluno);
        }catch(error){
            return res.status(500).end(String(error.message || error));
        }

    },

    async update(req, res) {
        const aluno = await
            Alunos.findByIdAndUpdate(req.params.id, req.body, {
                new:
                    true
            })

        return res.json(aluno);

    },
    async delete(req, res) {
        await Alunos.findByIdAndDelete(req.params.id);

        return res.send();

    },
    // async showone(req,res){
    //     const aluno = await Alunos.findById(req.params.id);
    //     return res.json(aluno);
    // }

    async showone(req, res) {
        const aluno = await Alunos.findOne({ "id": req.params.id });

        aluno._id = -1

        return res.json(aluno)
    }

};