const Sequelize = require('sequelize');
require('dotenv/config');

const conn = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT),
	dialect: "mysql",
	logging: false
});

//alter user 'root'@'localhost' identified with mysql_native_password by 'root'

module.exports = conn;