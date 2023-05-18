var express = require('express');
var router = express.Router();

const ResumeControllers = require("../controller/ResumeController");

router.get("/",ResumeControllers.getData);
router.get("/:id", ResumeControllers.getSingleData);
router.post("/", ResumeControllers.createData);
router.patch("/:id", ResumeControllers.updateData);
router.delete("/:id",ResumeControllers.deleteData);

module.exports = router;