const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("nodesequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// try {
//   sequelize.authenticate();
//   console.log("Conexão efetuada.");
// } catch (err) {
//   console.log(`Não foi possível conectar.\nError: ${err}`);
// }

module.exports = sequelize;
