import Email from '../models/Emails';

class EmailController {
  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new EmailController();
