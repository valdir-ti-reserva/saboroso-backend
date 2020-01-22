import * as Yup from 'yup';
import Menu from '../models/Menus';

class MenuController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Validation Fails' });
    }

    const { path, mimetype } = req.file;

    const permitted = ['image/jpeg', 'image/png', 'image/jpg'];

    if (permitted.indexOf(mimetype) === -1) {
      return res.status(400).json({ message: 'Invalid format' });
    }

    req.body.photo = (path);

    const menu = await Menu.create(req.body);

    return res.json({ status: true, menu });
  }
}

export default new MenuController();
