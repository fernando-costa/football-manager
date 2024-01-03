import { Request, Router, Response } from 'express';
import MatchesController from '../../controller/matches/MatchesController';
import { validateToken } from '../../middlewares/loginValidation';

const matchesController = new MatchesController();

const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => matchesController.getAllMatches(req, res),
);

router.patch(
  '/:id/finish',
  validateToken,
  (req: Request, res: Response) => matchesController.finishMatchById(req, res),
);

export default router;
