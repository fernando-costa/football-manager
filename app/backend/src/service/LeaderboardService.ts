import { ServiceResponse } from '../Interfaces/ServiceResponse';
import LeaderboardModel from '../model/leaderboard/LeaderboardModel';
import { ILeaderboardModel } from '../Interfaces/Leaderboards/ILeaderboardModel';
import { TeamScore } from '../Interfaces/Leaderboards/TeamScore';

export default class LeaderboardService {
  constructor(
    private leaderboardModel: ILeaderboardModel = new LeaderboardModel(),
  ) {}

  private scoreObject = {
    name: '',
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: 0,
  };

  public async getHomeScore(): Promise<ServiceResponse<TeamScore[]>> {
    const homeScore = await this.leaderboardModel.getHomeScore();

    if (!homeScore) {
      return { status: 'NOT_FOUND', data: { message: 'Something went wrong' } };
    }

    return { status: 'SUCCESSFUL', data: homeScore };
  }
}
