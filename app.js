const express = require("express");
const app = express();
var port = 3001;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/ask", (req, res) => {
	res.render("ask");
});

app.post("/save-ask", (req, res) => {
	res.send("formulário recebido");
});

app.listen(port, () => {console.log("Aplicação rodando na porta: "+ port)})