const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Patron = db.define("Patron", {
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  rank: {
    type: DataTypes.STRING,
    required: true,
  },
});

module.exports = Patron;
