import { Router } from 'express';
import TeamsRouter from './teams/teams.routes';
import LoginRouter from './users/login.routes';

const router = Router();

router.use('/teams', TeamsRouter);

router.use('/login', LoginRouter);

export default router;
