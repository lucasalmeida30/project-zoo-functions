const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter(({ id }) => ids.some((element) => element === id));
}

module.exports = getSpeciesByIds;
