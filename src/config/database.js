module.exports = {
    dialect: 'mysql',
    host: "infnet_desafio.mysql.dbaas.com.br", 
    username: "infnet_desafio",
    password: "infnet12345678",
    database: "infnet_desafio",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },     
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};
