const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Curso extends Model {
    static init(sequelize) {
        super.init(
            {
                descricao: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

module.exports = Curso;