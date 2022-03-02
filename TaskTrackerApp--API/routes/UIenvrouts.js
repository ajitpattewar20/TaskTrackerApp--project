const express = require("express");
const router = express.Router();

const { getUIenvdev, getUIenvprod } = require("../controllers/UIenvController");

router.route("/dev").get(getUIenvdev);
router.route("/prod").get(getUIenvprod);

module.exports = router;
