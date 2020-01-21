module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn('reservations', 'email', {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  }),

  down: (queryInterface) => queryInterface.removeColumn('reservations', 'email'),
};
