const express = require("express");
const router = express.Router();
const controller = require("./profileControllers");

// upload route
router.post("/", controller.uploadProfile);

// get profiles
router.get('/profile', controller.getProfiles);

// delete profile
router.delete('/delete/:id', controller.deleteProfile);

module.exports = router;