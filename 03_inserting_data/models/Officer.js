const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Officer = db.define("Officer", {
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

module.exports = Officer;
