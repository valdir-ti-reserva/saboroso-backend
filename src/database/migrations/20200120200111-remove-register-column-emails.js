module.exports = {
  up: (queryInterface) => queryInterface.removeColumn('emails', 'register'),
  down: (queryInterface, Sequelize) => queryInterface.addColumn('emails', 'register', { type: Sequelize.STRING }),
};
