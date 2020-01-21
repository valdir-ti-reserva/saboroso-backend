import Reservation from '../models/Reservations';

class ReservationController {
  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new ReservationController();
