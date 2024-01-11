import { QueryTypes } from 'sequelize';
import { ILeaderboardModel } from '../../Interfaces/Leaderboards/ILeaderboardModel';
import SequelizeTeam from '../../database/models/SequelizeTeam';
import { TeamScore } from '../../Interfaces/Leaderboards/TeamScore';

export default class LeaderboardModel implements ILeaderboardModel {
  private model = SequelizeTeam;
  private scoreQuery = (team: string, opponent: string) => `
SELECT *,
(score.totalVictories * 3 + score.totalDraws) AS totalPoints,
(score.goalsFavor - score.goalsOwn) AS goalsBalance,
ROUND((score.totalVictories * 3 + score.totalDraws)
/ (score.totalGames * 3) * 100, 2) AS efficiency
FROM (SELECT t.team_name AS name,
COUNT(m.id) AS totalGames,
SUM(CASE WHEN m.${team}_team_goals > m.${opponent}_team_goals THEN 1 ELSE 0 END) AS totalVictories,
SUM(CASE WHEN m.${team}_team_goals = m.${opponent}_team_goals THEN 1 ELSE 0 END) AS totalDraws,
SUM(CASE WHEN m.${team}_team_goals < m.${opponent}_team_goals THEN 1 ELSE 0 END) AS totalLosses,
SUM(${opponent}_team_goals) AS goalsOwn,
SUM(${team}_team_goals) AS goalsFavor
FROM matches AS m LEFT JOIN teams AS t ON t.id = m.${team}_team_id WHERE in_progress = false
GROUP BY name
) AS score
ORDER BY totalPoints DESC, score.totalVictories DESC, goalsBalance DESC, goalsFavor DESC
`;

  // async getHomeScore(): Promise<TeamScore[] | undefined> {
  //   const teamsMatches = await this.model
  //     .sequelize?.query(
  //       `${this.homeScoreQuery}`,
  //       { type: QueryTypes.SELECT },
  //     );
  //   return teamsMatches as TeamScore[];
  // }

  async getScore(matchType: string): Promise<TeamScore[] | undefined> {
    if (matchType === 'home') {
      const teamsMatches = await this.model
        .sequelize?.query(
          this.scoreQuery(matchType, 'away'),
          { type: QueryTypes.SELECT },
        );
      return teamsMatches as TeamScore[];
    } if (matchType === 'away') {
      const teamsMatches = await this.model
        .sequelize?.query(
          this.scoreQuery(matchType, 'home'),
          { type: QueryTypes.SELECT },
        );
      return teamsMatches as TeamScore[];
    }
  }
}
