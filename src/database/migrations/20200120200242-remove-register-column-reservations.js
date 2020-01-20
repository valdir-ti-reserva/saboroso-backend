module.exports = {
  up: (queryInterface) => queryInterface.removeColumn('reservations', 'register'),
  down: (queryInterface, Sequelize) => queryInterface.addColumn('reservations', 'register', { type: Sequelize.STRING }),
};
