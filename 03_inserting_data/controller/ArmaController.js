const { raw } = require("mysql2");
const Arma = require("../models/Arma");
const Patron = require("../models/Patron");

module.exports = class ArmaController {
  static async armaAll(req, res) {
    const armas = await Arma.findAll({ raw: true });
    res.status(200).json(armas);
  }

  static async armaDetails(req, res) {
    const id = req.params.id;
    const arma = await Arma.findOne({ include: Patron, where: { id: id } });
    res.status(200).json(arma);
  }

  static async createArma(req, res) {
    const arma = req.body.arma;
    const patron = req.body.name;
    const PatronId = await getPatronId(patron);
    const body = {
      arma,
      PatronId,
    };
    await Arma.create(body);
    res.status(200).json("CRIADO COM SUCESSO");
  }
};

async function getPatronId(name) {
  const patron = await Patron.findOne({ raw: true, where: { name: name } });
  console.log(typeof patron.id);

  return patron.id;
}
