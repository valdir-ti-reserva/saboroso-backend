module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn('emails', 'email', {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  }),

  down: (queryInterface) => queryInterface.removeColumn('emails', 'email'),
};
