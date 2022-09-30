const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.some((animals) => animals.name === animal && animals
    .residents.every((ages) => ages.age >= age));
}

module.exports = getAnimalsOlderThan;
