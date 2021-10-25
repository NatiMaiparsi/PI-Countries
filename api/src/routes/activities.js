const { Router } = require('express');
const {Activity} = require('../db')

const router = Router();

router.post('/', async (req, res) => {
    const {name, dificulty, duration, season} = req.body
    const newActivity = await Activity.create({name, dificulty, duration, season})
    res.send(newActivity)
})
module.exports = router;