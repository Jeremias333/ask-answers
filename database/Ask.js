const Sequelize = require("sequelize");
const conn = require("./database");


const Ask = conn.define("ask", {
	title:{
		type: Sequelize.STRING,
		allowNull: false
	},
	describe:{
		type: Sequelize.TEXT,
		allowNull: false
	}
});

Ask.sync({force: false}).then(() => {
	// console.log("Ask table created");
}).catch((err) => {
	// console.log(err);
});


module.exports = Ask;