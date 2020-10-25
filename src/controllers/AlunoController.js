const mongoose = require ('mongoose');

const Alunos = mongoose.model('Alunos');

module.exports = {
    async index(req, res){
        const aluno = await Alunos.find();

        return res.json(aluno);
    },

    async store(req, res){
        const aluno = await Alunos.create(req.body);
        
        return res.json(aluno);
        
    },
    
    async update(req,res){
        const aluno = await 
        Alunos.findByIdAndUpdate(req.params.id, req.body, { new: 
            true})
            
            return res.json(aluno);

    },
    async delete(req,res){
        await Alunos.findByIdAndDelete(req.params.id);

        return res.send();

    },
    // async showone(req,res){
    //     const aluno = await Alunos.findById(req.params.id);
    //     return res.json(aluno);
    // },

    async showOneByName(req,res){
        const aluno = await Alunos.findOne({"Nome":req.params.nome});
        return res.json(aluno)
    }

};