const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");
const user = require("./models/User");
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

//condiciono a sincronização para a aplicação funcionar
//a aplicação não funciona sem que as tabelas sejam criadas
conn.sync().then(() => {
  app.listen(port, () => {
    console.log(`Running on port: ${port}`);
  });
});
