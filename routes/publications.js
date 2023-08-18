const express = require("express");
const router = express.Router();
const Publications = require('../models/publications');

//Request get all publications  
router.get("/", (req, res) => {
    Publications.find()
        .then(publications => res.json(publications))
        .catch(err => res.status(400).json("Error : "));
       
});

//Request all new publications 
router.post("/addp", (req, res) => {
    const newPublications = new Publications({
      
        title:req.body.title,
        organiser:req.body.organiser,
        details:req.body.details,
        date:req.body.date,
        fees:req.body.fees
    });

    newPublications.save().then(()=>res.json("The new event is updated successfully! ")).catch(err => res.status(400).json("Error : "));
        // console.log(req.body)

});

module.exports = router;