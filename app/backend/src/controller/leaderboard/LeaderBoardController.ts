import { Request, Response } from 'express';
import LeaderboardService from '../../service/LeaderboardService';
// import mapStatusHTTP from '../../utils/mapHTTPStatus';

export default class LeaderboardController {
  constructor(
    private leaderboardService = new LeaderboardService(),
  ) {}

  public async getScore(_req: Request, res: Response) {
    const matchType = _req.path.split('/')[1];
    const serviceResponse = await this.leaderboardService.getScore(matchType);
    return res.status(200).json(serviceResponse.data);
  }
}
