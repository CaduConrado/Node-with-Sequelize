const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");
const Officer = require("./models/Officer");
const app = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/officer/showAll", async (req, res) => {
  const officers = await Officer.findAll({ raw: true });
  console.log(officers);

  res.render("officers", { officers: officers });
});

app.get("/officer/details/:id", async (req, res) => {
  const id = req.params.id;
  const officer = await Officer.findOne({ raw: true, where: { id: id } });
  res.render("officer", { officer });
});

app.get("/officer/create", (req, res) => {
  res.render("addOfficer");
});

app.post("/officer/create", async (req, res) => {
  const name = req.body.name;
  const rank = req.body.rank;
  let active = req.body.active;

  if (active === "on") {
    active = true;
  } else {
    active = false;
  }

  await Officer.create({ name, rank, active });
  res.redirect("/");
});

//condiciono a sincronização para a aplicação funcionar
//a aplicação não funciona sem que as tabelas sejam criadas
conn.sync().then(() => {
  app.listen(port, () => {
    console.log(`Running on port: ${port}`);
  });
});
