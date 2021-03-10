module.exports = {
    dialect: 'mysql',
    host: "", 
    username: "",
    password: "",
    database: "",
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
