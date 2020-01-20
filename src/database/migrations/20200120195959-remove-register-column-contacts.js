module.exports = {
  up: (queryInterface) => queryInterface.removeColumn('contacts', 'register'),
  down: (queryInterface, Sequelize) => queryInterface.addColumn('contacts', 'register', { type: Sequelize.STRING }),
};
