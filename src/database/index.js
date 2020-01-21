import Sequelize from 'sequelize';

import User from '../app/models/Users';
import Contact from '../app/models/Contacts';

import dataBaseConfig from '../config/database';

const models = [User, Contact];

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
