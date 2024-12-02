const express = require("express");
const router = express.Router();

const OfficerController = require("../controller/officerController");

router.get("/showAll", OfficerController.officerAll);
router.get("/details/:id", OfficerController.officerDetails);
router.get("/edit/:id", OfficerController.officerEdit);
router.get("/create", OfficerController.officerCreate);
router.post("/create", OfficerController.officerCreatePost);
router.post("/update", OfficerController.officerUpdate);
router.post("/delete/:id", OfficerController.officerDelete);

module.exports = router;
