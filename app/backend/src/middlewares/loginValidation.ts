import { NextFunction, Request, Response } from 'express';
import JWT from '../utils/JWT';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  const validPassword = password.length >= 6;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  if (!emailRegex.test(email) || !validPassword) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

const validateToken = async (req: Request, res: Response, next: NextFunction):
Promise<Response | void> => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = authorization.split(' ')[1];
  const validToken = JWT.verify(token);
  if (validToken === 'Token must be a valid token') {
    return res.status(401).json({ message: validToken });
  }
  res.locals.token = validToken;
  next();
};

export {
  validateLogin,
  validateToken,
};
