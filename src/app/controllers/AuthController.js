import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import Usuario from '../models/Usuario';

import authConfig from '../../config/auth';

class AuthController {
    async store(req, res){
        const schema = Yup.object().shape({
            usuario: Yup.string().required(),
            password: Yup.string().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ 
                    mensagem: 'body sem usuario ou password.'
                });
        }

        const {usuario, password} = req.body;

        let user = await Usuario.findOne({ where: { usuario } }).catch(((err) => {
            return res.status(400).send();
        }));

        if(! user){
            return res.status(400).send();
        }
        
        if(! await user.checkPassword(password)){
            return res.status(400).send();
        }

        const { id } = user;

        return res.json({
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        });    
    }
}


export default new AuthController();