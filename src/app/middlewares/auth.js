import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not provided!' });
  }

  const [, token] = authHeader.split(' ');

  // const permissions = ['del', 'add', 'edit'];
  // const operation = ['candide'];

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;
    // req.permissions = permissions;
    // req.operation = operation;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token!' });
  }
};
