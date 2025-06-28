const express = require("express");
const router = express.Router();

//Index -users
router.get("/",  (req, res) => {
    res.send("Get For Users");
});

//show-users
router.get("/:id", (req, res) => {
    res.send("Get For User id");
});

//Post -users
router.post("/", (req, res) => {
    res.send("Post For Users");
});

//Delete -Users
router.delete("/:id", (req, res) => {
    res.send("Delete For User id");
});

module.exports = router;