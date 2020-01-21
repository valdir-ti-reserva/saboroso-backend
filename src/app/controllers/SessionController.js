import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

import User from '../models/Users';

class SessionController {
  async store(req, res) {
    const { email, password_hash } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'User not found!' });
    }

    if (!(await user.checkPassword(password_hash))) {
      return res.status(401).json({ message: 'Invalid Password!' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id, name, email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
