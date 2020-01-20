'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('reservations', {

    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    people: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    time: {
      type: Sequelize.TIME,
      allowNull: true
    },
    register: {
      type: Sequelize.DATE,
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    }

  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('reservations')

};
