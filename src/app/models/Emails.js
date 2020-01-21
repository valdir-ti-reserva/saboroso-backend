import Sequelize, { Model } from 'sequelize';

class Email extends Model {
  static init(sequelize) {
    super.init({
      email: Sequelize.STRING,
    }, {
      sequelize,
    });
  }
}

export default Email;
