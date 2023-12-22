import { NextFunction, Request, Response } from 'express';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  const validPassword = password.length >= 6;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  if (!emailRegex.test(email) || !validPassword) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }
  next();
};

export default validateLogin;
