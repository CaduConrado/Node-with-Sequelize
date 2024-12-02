const { raw } = require("mysql2");
const Patron = require("../models/Patron");

module.exports = class PatronController {
  static async patronAll(req, res) {
    const patrons = await Patron.findAll({ raw: true });
    res.status(200).json(patrons);
  }

  static async patronCreate(req, res) {
    const name = req.body.name;
    const rank = req.body.rank;
    await Patron.create({ name, rank });
    res.status(200).json("CRIADO COM SUCESSO");
  }
};
