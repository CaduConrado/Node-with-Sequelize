const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Patron = require("./Patron");

const Arma = db.define("Arma", {
  arma: {
    type: DataTypes.STRING,
    required: true,
  },
});

Arma.belongsTo(Patron);

module.exports = Arma;
