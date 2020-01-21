module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn('contacts', 'email', {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  }),

  down: (queryInterface) => queryInterface.removeColumn('contacts', 'email'),
};
