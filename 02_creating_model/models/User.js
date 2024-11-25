const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rank: {
    type: DataTypes.STRING,
    required: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = User;
