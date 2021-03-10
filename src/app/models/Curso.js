
import Sequelize, { Model } from 'sequelize';

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

export default Curso;