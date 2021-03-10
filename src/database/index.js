import Sequelize from 'sequelize';

import databaseconfig from '../config/database';

import Usuario from '../app/models/Usuario';
import Curso from '../app/models/Curso';

const models = [Usuario, Curso];

class Database {
    constructor(){
        this.init();
    }

    init(){
       this.conexao = new Sequelize(databaseconfig);
       models.map(model => model.init(this.conexao)); 
    }
}

export default new Database();