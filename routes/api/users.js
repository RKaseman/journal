
const router = require("express").Router();
const db = require("../../models");

router.get("/", function (req, res) {
    res.send("Hello world")
})

router.get("/:username", function(req, res) {
    // console.log(req.params.username);
    // db.Users.find({
    //     username: "jack"
    // }, function(error, userThing) {
    //     console.log(userThing);
    //     res.send(userThing);
    // })
res.send("anything");
})

module.exports = router;
