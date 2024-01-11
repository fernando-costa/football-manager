import { Request, Response } from 'express';
import LeaderboardService from '../../service/LeaderboardService';
// import mapStatusHTTP from '../../utils/mapHTTPStatus';

export default class LeaderboardController {
  constructor(
    private leaderboardService = new LeaderboardService(),
  ) {}

  public async getHomeScore(_req: Request, res: Response) {
    const serviceResponse = await this.leaderboardService.getHomeScore();
    return res.status(200).json(serviceResponse.data);
  }
}
