const express = require("express");
const app = express();
var port = 3001;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	// res.send("Bem vindo ao meu site.");
	var name = "Jeremias";
	var type = "Geral";

	var showMsg = false;

	var products = [
		{
			name: "Potato",
		 	price: 5.00
		},
		{
			name: "Fork",
		 	price: 3.00
		},

	]


	res.render("index",{
		name: name,
		type: type,
		showMsg: showMsg,
		products: products
	});
});

app.listen(port, () => {console.log("Aplicação rodando na porta: "+ port)})