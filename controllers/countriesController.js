const countriesService = require('../services/countriesService');


const getAllAmericaCountries = (request, response) => {

    try {

        const countries = countriesService.getAmericaCountries();
        response.json(countries);

    }catch (error) {
        console.error("Error al obtener los países de América:", error);
        response.status(500).json({ error: "Error interno del servidor" });
        return;
    }
 
};


const getAmericaCountriesNames = (request, response) => {
     try {

        const countries = countriesService.getAmericaCountriesNames();
        response.json(countries);

    }catch (error) {
        console.error("Error al obtener los países de América:", error);
        response.status(500).json({ error: "Error interno del servidor" });
        return;
    }
 
};


const getAmericaCountriesList = (request, response) => {
     try {

        const countries = countriesService.getAmericaCountriesList();
        response.json(countries);

    }catch (error) {
        console.error("Error al obtener los países de América:", error);
        response.status(500).json({ error: "Error interno del servidor" });
        return;
    }
 
};

const getAmericaCountriesByCCA2 = (request, response) => {
    const cca2 = request.params.cca2;
    try {

        const country = countriesService.getAmericaCountriesByCCA2(cca2);
        if (!country) {
            response.status(404).json({ error: "No se encontró el país" });
            return;
        }
        response.json(country);

    }catch (error) {
        console.error("Error al obtener el país de América:", error);
        response.status(500).json({ error: "Error interno del servidor" });
        return;
    }
};

module.exports = {
    getAllAmericaCountries,
    getAmericaCountriesNames,
    getAmericaCountriesList,
    getAmericaCountriesByCCA2
};