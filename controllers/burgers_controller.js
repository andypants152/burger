var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})

router.post("/api/burgers", function(req, res){
    console.log(req.body);
    burger.insertOne(["burger_name"], [req.body.name], function(result){
        res.json({id: result.insertID });
    })
})

module.exports = router;