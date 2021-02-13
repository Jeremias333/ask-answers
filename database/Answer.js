const Sequelize = require("sequelize");
const conn = require("./database");

const Answer = conn.define("answers", {
	body: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	askId: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
});


Answer.sync({force:false});

module.exports = Answer;