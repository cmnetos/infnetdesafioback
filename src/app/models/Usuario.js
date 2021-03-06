
const Sequelize = require('sequelize');
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

class Usuario extends Model {
    static init(sequelize) {
        super.init(
            {
                usuario: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        this.addHook("beforeSave", async (usuario)=> {
            if(usuario.password){
                usuario.password_hash = await bcrypt.hash(usuario.password, 8);
            }
        });
    }

    checkPassword(password){
        return bcrypt.compare(password, this.password_hash);
    }
}

module.exports = Usuario;