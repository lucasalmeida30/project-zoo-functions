const data = require('../data/zoo_data');

const { species, hours } = data;

const teste = (dia) => {
  const keysHours = Object.keys(hours);
  const result = species.filter(({ availability }) => availability.includes(dia))
    .map(({ name }) => name);
  const horario = keysHours.find((element) => element === dia);
  const r = hours[horario];
  const final = {
    [horario]: {
      officeHour: `Open from ${r.open}am until ${r.close}pm`,
      exhibition: result,
    },
  };
  return final;
};

const hourrs = () => {
  const keysHours = Object.keys(hours);
  const valuesHours = Object.values(hours);
  const arrayVazio = [];
  keysHours.forEach((element, index) => {
    arrayVazio.push({
      [element]: {
        officeHour: `Open from ${valuesHours[index].open}am until ${valuesHours[index].close}pm`,
        exhibition: species.filter(({ availability }) => availability.includes(element))
          .map(({ name }) => name),
      },
    });
  });
  Object.assign({}, ...arrayVazio).Monday.officeHour = 'CLOSED';
  Object.assign({}, ...arrayVazio).Monday.exhibition = 'The zoo will be closed!';
  return Object.assign({}, ...arrayVazio);
};
// console.log(hourrs())
function getSchedule(scheduleTarget) {
  const keysHours = Object.keys(hours);
  const days = species.find(({ name }) => name === scheduleTarget);
  if (days) return days.availability;
  if (!scheduleTarget) return hourrs();
  const monday = { Monday: hourrs().Monday };
  if (scheduleTarget === 'Monday') return monday;
  if (keysHours.some((e) => e.includes(scheduleTarget))) return teste(scheduleTarget);
  return hourrs();
}
console.log(getSchedule(''));
module.exports = getSchedule;
