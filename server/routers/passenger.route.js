const router = require('express').Router();
const Passenger = require('../models/passenger.model');

router.post('/', async (req, res) => {
    console.log(req.body.name)
    await Passenger.findOneAndUpdate(
        { name: req.body.name },
        { name: req.body.name, dates: req.body.dates },
        { new: true, upsert: true }
    )
    
    res.status(200).send("Success")
});

module.exports = router;