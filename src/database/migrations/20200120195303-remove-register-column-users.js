module.exports = {
  up: (queryInterface) => queryInterface.removeColumn('users', 'register'),
  down: (queryInterface, Sequelize) => queryInterface.addColumn('users', 'register', { type: Sequelize.STRING }),
};
