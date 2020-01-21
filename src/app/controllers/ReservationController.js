import * as Yup from 'yup';
import Reservation from '../models/Reservations';

class ReservationController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      people: Yup.number().moreThan(0),
      date: Yup.date(),
      time: Yup.date(),
    });

    console.table(req.body);

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ message: 'Validation Fails!' });
    }

    return res.json({ ok: true });
  }
}

export default new ReservationController();
