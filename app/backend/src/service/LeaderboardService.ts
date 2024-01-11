import { ServiceResponse } from '../Interfaces/ServiceResponse';
import LeaderboardModel from '../model/leaderboard/LeaderboardModel';
import { ILeaderboardModel } from '../Interfaces/Leaderboards/ILeaderboardModel';
import { TeamScore } from '../Interfaces/Leaderboards/TeamScore';

export default class LeaderboardService {
  constructor(
    private leaderboardModel: ILeaderboardModel = new LeaderboardModel(),
  ) {}

  public async getScore(matchType: string): Promise<ServiceResponse<TeamScore[]>> {
    const homeScore = await this.leaderboardModel.getScore(matchType);

    if (!homeScore) {
      return { status: 'NOT_FOUND', data: { message: 'Something went wrong' } };
    }

    return { status: 'SUCCESSFUL', data: homeScore };
  }
}
