const path = require('path');
const fs = require('fs');


//Carga json de paises

const filePath = path.join(__dirname, '../resources/america.json');

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.error("Error al cargar el archivo JSON:", err);
    return;
  }
  const countries = JSON.parse(data);

});

const paisesAmerica = JSON.parse(fs.readFileSync(filePath, 'utf8'));


const getAmericaCountries = () => {
  return paisesAmerica;
};


const getAmericaCountriesNames = () => {
  return paisesAmerica.map(country => country.name);
};

const getAmericaCountriesList = () => {
  return paisesAmerica.map(country => ({
    name: country.name.official,
    flag: country.flags.png,
    cca2: country.cca2
  }));

};

const getAmericaCountriesByCCA2 = (cca2) => {
  return paisesAmerica.find(country => country.cca2 === cca2);
};

module.exports = { 
  getAmericaCountries,
  getAmericaCountriesNames,
  getAmericaCountriesList,
  getAmericaCountriesByCCA2
};//Exportar la función