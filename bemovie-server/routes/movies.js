const express = require('express');
const router = express.Router();

const { Movies } = require("../models/Movies");


router.get("/all", (req, res) => {
    Movies.find({})
        .exec((err, favorites) => {
            if (err) return res.status(400).send(err);
            return res.status(200).json({ success: true, favorites })
        })
});

router.get("/", (req, res) => {
    Movies.findOne({imdbID: req.query.imdbID})
        .exec((err, data) => {
            if (err) return res.status(400).send(err);
            return res.status(200).json({ success: true, data })
        })
});

router.post("/", (req, res) => {
    const newMovie = new Movies(req.body);
    console.log(newMovie)
    newMovie.save((err, doc) => {
        console.log(err);
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});


router.delete("/", (req, res) => {
    Movies.findOneAndDelete({ movieId: req.body.imdbID })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, err });
            res.status(200).json({ success: true, doc })
        })
});

module.exports = router;
