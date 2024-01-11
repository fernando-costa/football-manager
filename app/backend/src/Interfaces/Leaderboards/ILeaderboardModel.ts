import { TeamScore } from './TeamScore';

export interface ILeaderboardModel {
  getHomeScore(): Promise<TeamScore[] | undefined>
}
