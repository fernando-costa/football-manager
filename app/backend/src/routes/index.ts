import { Router } from 'express';
import TeamsRouter from './teams/teams.routes';
import LoginRouter from './users/login.routes';
import MatchesRouter from './matches/matches.routes';
import LeaderboardRouter from './leaderboard/leaderboard.routes';

const router = Router();

router.use('/teams', TeamsRouter);

router.use('/login', LoginRouter);

router.use('/matches', MatchesRouter);

router.use('/leaderboard', LeaderboardRouter);

export default router;
