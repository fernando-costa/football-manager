import { Request, Router, Response } from 'express';
import validateLogin from '../../middlewares/loginValidation';
import LoginController from '../../controller/login/LoginController';

const loginController = new LoginController();

const router = Router();

router.post(
  '/',
  validateLogin,
  (req: Request, res: Response) => loginController.login(req, res),
);

export default router;
