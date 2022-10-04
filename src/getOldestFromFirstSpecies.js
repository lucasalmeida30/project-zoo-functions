const data = require('../data/zoo_data');

const { species } = data;

function getOldestFromFirstSpecies(id) {
  const people = data.employees.filter((element) => element.id === id);
  const a = people.find((e) => e).responsibleFor[0];
  const age = species.filter((b) => b.id === a)
    .map((c) => c.residents.map((d) => d.age))[0].sort((x, b) => b - x)[0];
  const r = species.find((element) => element.id === a).residents
    .filter((element2) => element2.age === age)[0];
  return Object.values(r);
}

module.exports = getOldestFromFirstSpecies;
