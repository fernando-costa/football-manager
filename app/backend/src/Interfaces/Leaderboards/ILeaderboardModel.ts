import { TeamScore } from './TeamScore';

export interface ILeaderboardModel {
  getScore(matchType: string): Promise<TeamScore[] | undefined>
}
