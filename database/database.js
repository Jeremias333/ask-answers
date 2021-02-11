const Sequelize = require('sequelize');

const conn = new Sequelize('ask_answer', 'jeremias', '333666', {
	host: "localhost",
	port: 3308,
	dialect: "mysql"
});

//alter user 'root'@'localhost' identified with mysql_native_password by 'root'

module.exports = conn;