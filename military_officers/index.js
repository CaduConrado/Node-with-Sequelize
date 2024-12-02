const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");
const Officer = require("./models/Officer");
const Patron = require("./models/Patron");
const Arma = require("./models/Arma");
const officerRoutes = require("./routes/officerRoutes");
const patronRoutes = require("./routes/patronRoutes");
const armaRoutes = require("./routes/armaRoutes");
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

app.use("/officer", officerRoutes);
app.use("/patron", patronRoutes);
app.use("/arma", armaRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

//condiciono a sincronização para a aplicação funcionar
//a aplicação não funciona sem que as tabelas sejam criadas
conn.sync().then(() => {
  app.listen(port, () => {
    console.log(`Running on port: ${port}`);
  });
});
