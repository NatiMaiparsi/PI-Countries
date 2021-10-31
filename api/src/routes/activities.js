const { Router } = require('express');
const {Activity, Country} = require('../db')

const router = Router();

router.post('/', async (req, res, next) => {
    try{const {name, dificulty, duration, season, country} = req.body
    const newActivity = await Activity.create({name, dificulty, duration, season})
    let countriesDb = await Country.findAll({
        where: { name : country}
    })
    newActivity.addCountry(countriesDb)
    res.send('Personaje creado con exito')
}
    catch(error) {
        next(error)
    }
})

router.get('/', async (req, res, next) => {
    try{
        const activities = await Activity.findAll()
        res.status(200).send(activities)
    }
    catch(error){
        next(error)
    }
})

module.exports = router;