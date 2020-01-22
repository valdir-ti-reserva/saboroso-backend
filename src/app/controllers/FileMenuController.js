import * as Yup from 'yup';
import Menu from '../models/Menus';

class FileMenuController {
  async store(req, res) {
    const { id } = req.params;
    const { path } = req.file;

    const menu = await Menu.findByPk(id);

    const menuFile = await menu.update({ photo: path });

    return res.json({ status: true, menuFile });
  }
}

export default new FileMenuController();
