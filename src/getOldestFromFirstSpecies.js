const data = require('../data/zoo_data');

const { species } = data;

function getOldestFromFirstSpecies(id) {
  const people = data.employees.filter((element) => element.id === id);
  const a = people.find((e) => e).responsibleFor[0];
  const age = species.filter((b) => b.id === a)
    .map((c) => c.residents.filter((d) => d.age))[0].sort((x, b) => b.age - x.age)[0];
  return Object.values(age);
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
