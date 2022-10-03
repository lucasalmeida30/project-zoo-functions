const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  const obj = {};
  if (!animal) {
    species.forEach((element) => {
      obj[element.name] = element.residents.length;
    });
    return obj;
  }
  const { specie, sex } = animal;
  const animals = species.filter(({ name }) => name === specie);
  if (Object.keys(animal).length === 1) {
    return animals.map((element) => element.residents.length)[0];
  }
  const b = animals.map((element) => element.residents.filter((e) => e.sex === sex))[0];
  return b.length;
}
console.log(countAnimals({ specie: 'bears', sex: 'male' }));
module.exports = countAnimals;
