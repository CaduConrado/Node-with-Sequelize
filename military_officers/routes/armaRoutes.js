const express = require("express");
const router = express.Router();

const ArmaController = require("../controller/armaController");

router.get("/showAll", ArmaController.armaAll);
router.get("/details/:id", ArmaController.armaDetails);
router.post("/create", ArmaController.createArma);

module.exports = router;
