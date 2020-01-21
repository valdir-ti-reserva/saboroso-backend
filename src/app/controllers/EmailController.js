import * as Yup from 'yup';
import Email from '../models/Emails';

class EmailController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ messagem: 'Validation Fails!' });
    }

    const { email } = await Email.create(req.body);

    return res.json({
      status: true,
      email,
    });
  }
}

export default new EmailController();
