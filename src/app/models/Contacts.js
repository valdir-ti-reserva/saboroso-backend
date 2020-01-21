import Sequelize, { Model } from 'sequelize';

class Contact extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      message: Sequelize.TEXT,
    }, {
      sequelize,
    });
  }
}

export default Contact;
