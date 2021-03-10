const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../../config/auth');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({mensagem: "sem token no cabecalho"});
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        req.usuarioId = decoded.id;

    } catch(err){
        return res.status(403).json({mensagem: "token invalido"});        
    }

    return next();
}