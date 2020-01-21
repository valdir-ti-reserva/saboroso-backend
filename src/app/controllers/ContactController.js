import * as Yup from 'yup';
import Contact from '../models/Contacts';

class ContactController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      message: Yup.string().required().min(10),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Validation Fails!' });
    }

    const { name, email, message } = await Contact.create(req.body);

    return res.json({
      status: true,
      contact: {
        name, email, message,
      },
    });
  }
}

export default new ContactController();
