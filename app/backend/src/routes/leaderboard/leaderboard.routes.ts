import { Request, Router, Response } from 'express';
import LeaderboardController from '../../controller/leaderboard/LeaderBoardController';

const leaderboardController = new LeaderboardController();

const router = Router();

router.get('/home', (req: Request, res: Response) => leaderboardController.getHomeScore(req, res));

export default router;
