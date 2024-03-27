import { Request, Router, Response } from 'express';
import MatchesController from '../../controller/matches/MatchesController';
import { validateToken } from '../../middlewares/loginValidation';
import validateMatch from '../../middlewares/matchValidation';

const matchesController = new MatchesController();

const router = Router();

router.post(
  '/',
  validateToken,
  validateMatch,
  (req: Request, res: Response) => matchesController.createMatch(req, res),
);

router.get(
  '/:id',
  (req: Request, res: Response) => matchesController.getMatchById(req, res),
);

router.get(
  '/',
  (req: Request, res: Response) => matchesController.getAllMatches(req, res),
);

router.patch(
  '/:id/finish',
  validateToken,
  (req: Request, res: Response) => matchesController.finishMatchById(req, res),
);

router.patch(
  '/:id',
  validateToken,
  (req: Request, res: Response) => matchesController.updateMatchById(req, res),
);

export default router;
