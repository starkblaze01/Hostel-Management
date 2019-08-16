const express = require("express");
const router = express.Router();

// @route GET api/users/test
// @desc Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "It works!!" }));

module.exports = router;
