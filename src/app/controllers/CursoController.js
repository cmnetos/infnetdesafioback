import * as Yup from 'yup';

import Curso from '../models/Curso';

class CursoController {
    async index(req, res){
        let cursos = await Curso.findAll();
        return res.json(cursos);    
    }

    async show(req, res){
        const schema = Yup.object().shape({
            id: Yup.number().integer().required(),
        });

        if(!(await schema.isValid(req.params))){
            return res.status(400).json({ 
                    mensagem: 'id inválido.'
                });
        }

        const { id } = req.params;
        let curso = await Curso.findByPk(id);
        return res.json(curso);
    }

    async store(req, res){
        const schema = Yup.object().shape({
            descricao: Yup.string().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ 
                    mensagem: 'body sem descrição.'
                });
        }

        const { descricao } = req.body;
        let curso = await Curso.findOne({ where: { descricao } });
        if(! curso){
            curso = await Curso.create({ descricao });
        }
        return res.json(curso);    
    }
}

export default new CursoController();