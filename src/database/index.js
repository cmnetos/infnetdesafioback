const Sequelize = require('sequelize');

const databaseconfig = require('../config/database');

const Usuario = require('../app/models/Usuario');
const Curso = require('../app/models/Curso');

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

module.exports = new Database();