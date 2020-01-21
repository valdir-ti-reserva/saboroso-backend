import Sequelize, { Model } from 'sequelize';

class Reservation extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      people: Sequelize.INTEGER,
      date: Sequelize.DATE,
      time: Sequelize.TIME,
    }, {
      sequelize,
    });
  }
}

export default Reservation;
