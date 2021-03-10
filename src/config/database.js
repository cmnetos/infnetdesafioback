module.exports = {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST, 
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
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
