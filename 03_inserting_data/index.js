const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");
const Officer = require("./models/Officer");
const Patron = require("./models/Patron");
const Arma = require("./models/Arma");
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

app.get("/officer/edit/:id", async (req, res) => {
  const id = req.params.id;

  const officer = await Officer.findOne({ raw: true, where: { id: id } });

  res.render("officerEdit", { officer });
});

app.get("/patron/showAll", async (req, res) => {
  const patrons = await Patron.findAll({ raw: true });
  res.status(200).json(patrons);
});

app.get("/arma/showAll", async (req, res) => {
  const armas = await Arma.findAll({ raw: true });
  res.status(200).json(armas);
});

app.get("/arma/details/:id", async (req, res) => {
  const id = req.params.id;
  const arma = await Arma.findOne({ include: Patron, where: { id: id } });
  res.status(200).json(arma.get({ plain: true }));
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

app.post("/officer/delete/:id", async (req, res) => {
  const id = req.params.id;

  await Officer.destroy({ where: { id: id } });
  res.redirect("/officer/showAll");
});

app.post("/officer/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const rank = req.body.rank;
  let active = req.body.active;
  if (active === "on") {
    active = true;
  } else {
    active = false;
  }

  const data = {
    id,
    name,
    rank,
    active,
  };

  Officer.update(data, { where: { id: id } });
  res.redirect("/officer/showAll");
});

app.post("/patron/create", async (req, res) => {
  const name = req.body.name;
  const rank = req.body.rank;

  await Patron.create({ name, rank });
  res.status(200).json("CRIADO COM SUCESSO");
});

app.post("/arma/create", async (req, res) => {
  const arma = req.body.arma;
  const patron = req.body.name;
  console.log(patron);
  const PatronId = await getPatronId(patron);
  const body = {
    arma,
    PatronId,
  };
  await Arma.create(body);
  res.status(200).json("CRIADO COM SUCESSO");
});

async function getPatronId(name) {
  const patron = await Patron.findOne({ raw: true, where: { name: name } });
  console.log(typeof patron.id);

  return patron.id;
}
//condiciono a sincronização para a aplicação funcionar
//a aplicação não funciona sem que as tabelas sejam criadas
conn.sync().then(() => {
  app.listen(port, () => {
    console.log(`Running on port: ${port}`);
  });
});
