import Sequelize from 'sequelize';

import Menu from '../app/models/Menus';
import User from '../app/models/Users';
import Email from '../app/models/Emails';
import Contact from '../app/models/Contacts';
import Reservation from '../app/models/Reservations';

import dataBaseConfig from '../config/database';

const models = [User, Contact, Email, Reservation, Menu];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
