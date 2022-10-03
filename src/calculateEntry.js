const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const idade = entrants.map(({ age }) => age);
  let child = 0;
  let adult = 0;
  let senior = 0;
  idade.forEach((element) => {
    if (element < 18) child += 1;
    if (element >= 18 && element < 50) adult += 1;
    if (element >= 50) senior += 1;
  });

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const child = entrants.filter((element) => element.age < 18).length * prices.child;
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50)
    .length * prices.adult;
  const senior = entrants.filter((element) => element.age >= 50).length * prices.senior;
  const sum = child + adult + senior;
  return sum;
}

module.exports = { calculateEntry, countEntrants };
