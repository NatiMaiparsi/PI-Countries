const { Router } = require('express');
const {Activity} = require('../db')

const router = Router();

router.post('/', async (req, res) => {
    try{const {name, dificulty, duration, season} = req.body
    const newActivity = await Activity.create({name, dificulty, duration, season})
    res.send(newActivity)}
    catch(error) {
        next(error)
    }
})

router.get('/', async (req, res) => {
    try{
        const activities = await Activity.findAll()
        res.status(200).send(activities)
    }
    catch(error){
        next(error)
    }
})

module.exports = router;