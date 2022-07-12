const express = require("express");
const potModel = require("../model/pot");

const potRoutes = express.Router();

potRoutes.post("/pot/add", (req, res) => {
    const pot = new potModel({
        name: req.body.name,
        tag: req.body.tag,
        homepage: req.body.homepage,
        initialPotAmount: req.body.initialPotAmount,
        createdAt: Date.now(),
    });
    pot.save()
        .then(() => {
            res.send("Pot added successfully");
        })
        .catch((err) => {
            res.send(err);
        });
});

potRoutes.get("/pot/list", (req, res) => {
    potModel.find({}, (err, pots) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.send(pots);
        }
    });
});
module.exports = potRoutes;