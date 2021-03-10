module.exports = {
    dialect: 'mysql',
    host: "us-cdbr-east-03.cleardb.com", 
    username: "b0d6ae8edd53f0",
    password: "955c6404",
    database: "heroku_56dcaff9f5104df",
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
