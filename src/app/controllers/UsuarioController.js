import * as Yup from 'yup';

import Usuario from '../models/Usuario';

class UsuarioController {
    async index(req, res){
        let users = await Usuario.findAll();
        return res.json(users);    
    }

    async show(req, res){
        let user = await Usuario.findByPk(req.usuarioId);
        return res.json({
            id: user.id,
            usuario: user.usuario,
        });
    }

    async store(req, res){
        const schema = Yup.object().shape({
            usuario: Yup.string().required(),
            password: Yup.string().required().min(8),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ 
                    mensagem: 'Falha na validação. Usuário é obrigatório e senha deve conter no mínimo 8 caracteres'
                });
        }
        const {usuario, password} = req.body;
        let user = await Usuario.findOne({ where: { usuario } });
        if(! user){
            user = await Usuario.create({ usuario, password });
        }
        return res.json({
            id: user.id,
            usuario: user.usuario,
        });    
    }
}

export default new UsuarioController();