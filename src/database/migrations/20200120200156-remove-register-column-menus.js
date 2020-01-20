module.exports = {
  up: (queryInterface) => queryInterface.removeColumn('menus', 'register'),
  down: (queryInterface, Sequelize) => queryInterface.addColumn('menus', 'register', { type: Sequelize.STRING }),
};
