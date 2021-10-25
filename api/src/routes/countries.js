const { Router } = require('express');
const axios = require('axios');
const {Country, Activity} = require('../db');

const router = Router();


const getApiInfo = async () => {
    const apiUrl = await axios.get('https://restcountries.com/v3/all')
    const filteredCountries = await apiUrl.data.map(country => {
        let cap
        if(!country.capital){
            cap = 'No capital'
        } else {
            cap = country.capital[0]
        }
            return {
                id: country.cca3,
                name: country.name.common,
                img: country.flags[0],
                continent: country.region,
                capital: cap,
                subregion: country.subregion || 'No subregion',
                area: country.area,
                population: country.population,
            }
        }
    )
    const countries = filteredCountries.filter(c => c !== undefined)
    // console.log(filteredCountries)
    return countries;
    
}
// getApiInfo()
const getDbInfo = async () => {
    return await Country.findAll({
        include: Activity
        }
    )
}

const getAllInfo = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const totalInfo = [...apiInfo,...dbInfo];
    return totalInfo;
}
router.get('/', async (req, res) => {
  try { const allCities = await getApiInfo()
    const cities = allCities.map(c => {
            return Country.findOrCreate({
                where: {
                    id: c.id,
                    name: c.name,
                    img: c.img,
                    continent: c.continent,
                    capital: c.capital,
                    subregion: c.subregion,
                    area: c.area,
                    population: c.population,
                }
        })
    })
    const name = req.query.name;
    const countriesBd = await Country.findAll()
    if(name){
            const countrySearched = await countriesBd.filter(country => country.name.toLowerCase().includes(name.toLowerCase()) )
            countrySearched.length ?
            res.status(200).send(countrySearched) : res.status(404).send('The country does not exist')
            } else {
                res.status(200).send(countriesBd);
            }}
            catch (err) {
                next(err)
            }
        })


router.get('/:idPais', async (req, res) => {
    const idPais = req.params.idPais;
    const countries = await getAllCountries()
    const countrySearched = await countries.filter(country => country.id === idPais.toUpperCase())
    countrySearched.length ?
    res.status(200).send(countrySearched) : res.status(404).send('The id does not exist')

})

module.exports = router;