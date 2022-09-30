const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  if (name === undefined) return {};
  return data.employees.find((employe) => employe.lastName === name || employe.firstName === name);
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
