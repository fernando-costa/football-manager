import { Request, Router, Response } from 'express';
import { validateLogin, validateToken } from '../../middlewares/loginValidation';
import LoginController from '../../controller/login/LoginController';

const loginController = new LoginController();

const router = Router();

router.get(
  '/role',
  validateToken,
  (req: Request, res: Response) => loginController.getRole(req, res),
);

router.post(
  '/',
  validateLogin,
  (req: Request, res: Response) => loginController.login(req, res),
);
export default router;
