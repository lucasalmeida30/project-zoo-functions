const data = require('../data/zoo_data');
// const { employees } = data;

function isManager(id) {
  const managers = data.employees.some((people) => people
    .managers.some((element) => element === id));
  return managers;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  if (managerId) {
    return data.employees.filter((element) => element
      .managers.some((manager) => manager === managerId))
      .map((element2) => `${element2.firstName} ${element2.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
