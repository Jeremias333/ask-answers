const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const conn = require("./database/database");
const AskModel = require("./database/Ask");
const AnswerModel = require("./database/Answer");
var port = 3001;

//conectando
conn.authenticate().then(() => {
	console.log("Conexão bem sucedida");
}).catch((err) => {
	console.log(err);
});

//config frontend denpendencies
app.set("view engine", "ejs");
app.use(express.static("public"));

//config bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
app.get("/", (req, res) => {
	AskModel.findAll({raw:true, order:[
		['id', 'DESC'] //ordenação
		]}).then(asks => {
			res.render("index", { //enviando json de valores para o front.
				asks: asks
			});
	});

});

app.get("/ask", (req, res) => {
	res.render("ask");
});

app.get("/ask/:id", (req, res) => {
	var id = req.params.id;

	AskModel.findOne({
		where:{id:id}
	}).then((ask) => {
		if(ask != undefined){

			res.render("ask-one", {
				ask: ask
			});

		}else{
			res.redirect("/");
		}
	}).catch((err) => {
		console.log(err);
	});
});

app.post("/save-ask", (req, res) => {
	// res.send("formulário recebido");

	var title = req.body.title;
	var describe = req.body.describe;

	AskModel.create({
		title: title,
		describe: describe
	}).then(() => {
		console.log("success");
		res.redirect("/");
	}).catch((err) => {
		console.log(err);
	});
});

app.post("/save-answer", (req, res) => {
	var body = req.body.body;
	var askId = req.body.askId;

	AnswerModel.create({
		body: body,
		askId: askId
	}).then(() => {
		console.log("success");
		res.redirect(".")
	}).catch((err) => {
		console.log(err);
	});
});

app.listen(port, () => {console.log("Aplicação rodando na porta: "+ port)})