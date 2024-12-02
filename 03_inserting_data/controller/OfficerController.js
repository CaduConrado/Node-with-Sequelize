const { raw } = require("mysql2");
const Officer = require("../models/Officer");

module.exports = class OfficerController {
  static async officerAll(req, res) {
    const officers = await Officer.findAll({ raw: true });
    res.render("officers", { officers: officers });
  }

  static async officerDetails(req, res) {
    const id = req.params.id;
    const officer = await Officer.findOne({ raw: true, where: { id: id } });

    res.render("officer", { officer });
  }

  static officerCreate(req, res) {
    res.render("addOfficer");
  }

  static async officerEdit(req, res) {
    const id = req.params.id;
    const officer = await Officer.findOne({ raw: true, where: { id: id } });
    res.render("officerEdit", { officer });
  }

  static async officerCreatePost(req, res) {
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
  }

  static async officerDelete(req, res) {
    const id = req.params.id;

    await Officer.destroy({ where: { id: id } });
    res.redirect("/officer/showAll");
  }

  static async officerUpdate(req, res) {
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
    await Officer.update(data, { where: { id: id } });
    res.redirect(`/officer/details/${id}`);
  }
};
