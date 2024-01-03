import { Request, Router, Response } from 'express';
import MatchesController from '../../controller/matches/MatchesController';

const matchesController = new MatchesController();

const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => matchesController.getAllMatches(req, res),
);

router.get(
  '/:id',
  (req: Request, res: Response) => matchesController.getMatchById(req, res),
);

export default router;
