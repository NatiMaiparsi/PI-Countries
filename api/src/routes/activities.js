const { Router } = require('express');
const {Activity} = require('../db')

const router = Router();

router.post('/', async (req, res) => {
    try{const {name, dificulty, duration, season} = req.body
    const newActivity = await Activity.create({name, dificulty, duration, season})
    res.send(newActivity)}
    catch(err) {
        next(err)
    }
})
module.exports = router;