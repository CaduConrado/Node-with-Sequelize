const express = require("express");
const router = express.Router();

const PatronController = require("../controller/patronController");
const Patron = require("../models/Patron");

router.get("/showAll", PatronController.patronAll);
router.post("/create", PatronController.patronCreate);

module.exports = router;
