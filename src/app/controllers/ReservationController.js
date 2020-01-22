import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore } from 'date-fns';
import Reservation from '../models/Reservations';

class ReservationController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      people: Yup.number().moreThan(0),
      date: Yup.date(),
      time: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Validation Fails!' });
    }

    // Permitir apenas agendamentos de dias futuros
    const hourStart = startOfHour(parseISO(req.body.date));
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ message: 'Past date are not permited' });
    }

    // Limite de 10 pessoas por reserva
    if (req.body.people > 10) {
      return res.status(401).json({ message: 'Limit people Exceeded' });
    }

    // Checar se o email já tem reserva para o dia e horário
    const checaData = await Reservation.findOne({ where: { date: req.body.date, time: req.body.time, email: req.body.email } });
    if (checaData) {
      return res.status(401).json({ status: true, message: 'Date and Time already in use by user' });
    }

    const {
      name, email, people, date, time,
    } = await Reservation.create(req.body);

    return res.status(200).json({
      status: true,
      reservation: {
        name, email, people, date, time,
      },
    });
  }
}

export default new ReservationController();
