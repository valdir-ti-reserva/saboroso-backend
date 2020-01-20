import Sequelize, { Model } from 'sequelize';
// import bcript from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
    },
    {
      sequelize,
    });
  }
}

export default User;
