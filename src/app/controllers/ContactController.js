import Contact from '../models/Contacts';

class ContactController {
  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new ContactController();
