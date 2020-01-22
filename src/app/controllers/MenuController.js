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

    const { title, description, price } = await Menu.create(req.body);

    return res.json({ status: true, menu: { title, description, price } });
  }
}

export default new MenuController();
