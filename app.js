const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var port = 3001;

//config frontend denpendencies
app.set("view engine", "ejs");
app.use(express.static("public"));

//config bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
app.get("/", (req, res) => {
	res.render("index");
});

app.get("/ask", (req, res) => {
	res.render("ask");
});

app.post("/save-ask", (req, res) => {
	// res.send("formulário recebido");

	var title = req.body.title;
	var describe = req.body.describe;

	res.send("Dados foram: "+ title + describe)
});

app.listen(port, () => {console.log("Aplicação rodando na porta: "+ port)})