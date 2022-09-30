const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  const managers = employees.some((people) => people.managers === id);
  return managers;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
