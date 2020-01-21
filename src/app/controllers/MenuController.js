import Menu from '../models/Menus';

class MenuController {
  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new MenuController();
