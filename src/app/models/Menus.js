import Sequelize, { Model } from 'sequelize';

class Menu extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      price: Sequelize.FLOAT,
      photo: Sequelize.STRING,
    }, {
      sequelize,
    });
  }
}

export default Menu;
