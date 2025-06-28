const express = require("express");
const router = express.Router();

//Index
router.get("/", (req, res) => {
    res.send("Get For Posts");
}); 

//Show
router.get("/:id", (req, res) => {
    res.send("Get For Post id");
}); 

//Post
router.post("/", (req, res) => {
    res.send("Post For Posts");
}); 

//Delete
router.delete("/:id", (req, res) => {
    res.send("Delete For Post id");
});

module.exports = router;