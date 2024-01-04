import { NextFunction, Request, Response } from 'express';

const validateMatch = async (req: Request, res: Response, next: NextFunction) => {
  const newMatch = req.body;
  const requiredKeys = ['homeTeamId', 'awayTeamId', 'homeTeamGoals', 'awayTeamGoals'];
  const notFoundKey = requiredKeys.find((key) => !(key in newMatch));

  if (notFoundKey) {
    return res.status(400).json({ message: `Missing field ${notFoundKey} in request body` });
  }

  if (newMatch.homeTeamId === newMatch.awayTeamId) {
    return res.status(422).json(
      { message: 'It is not possible to create a match with two equal teams' },
    );
  }

  next();
};

export default validateMatch;
