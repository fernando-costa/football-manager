import { QueryTypes } from 'sequelize';
import { ITeam } from '../../Interfaces/Teams/ITeam';
import { ILeaderboardModel } from '../../Interfaces/Leaderboards/ILeaderboardModel';
import SequelizeTeam from '../../database/models/SequelizeTeam';
import { TeamScore } from '../../Interfaces/Leaderboards/TeamScore';

export default class LeaderboardModel implements ILeaderboardModel {
  private model = SequelizeTeam;
  private homeScoreQuery = `
SELECT *,
(homeScore.totalVictories * 3 + homeScore.totalDraws) AS totalPoints,
(homeScore.goalsFavor - homeScore.goalsOwn) AS goalsBalance,
ROUND((homeScore.totalVictories * 3 + homeScore.totalDraws)
/ (homeScore.totalGames * 3) * 100, 2) AS efficiency
FROM (SELECT t.team_name AS name,
COUNT(m.id) AS totalGames,
SUM(CASE WHEN m.home_team_goals > m.away_team_goals THEN 1 ELSE 0 END) AS totalVictories,
SUM(CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END) AS totalDraws,
SUM(CASE WHEN m.home_team_goals < m.away_team_goals THEN 1 ELSE 0 END) AS totalLosses,
SUM(away_team_goals) AS goalsOwn,
SUM(home_team_goals) AS goalsFavor
FROM matches AS m LEFT JOIN teams AS t ON t.id = m.home_team_id WHERE in_progress = false
GROUP BY name
) AS homeScore
ORDER BY totalPoints DESC, homeScore.totalVictories DESC, goalsBalance DESC, goalsFavor DESC
`;

  async findAll(): Promise<ITeam[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, teamName }) => (
      { id, teamName }
    ));
  }

  async findById(id: number): Promise<ITeam | null> {
    const dbData = await this.model.findByPk(id);
    if (dbData === null) return null;
    const { teamName }: ITeam = dbData;
    return { id, teamName };
  }

  async getHomeScore(): Promise<TeamScore[] | undefined> {
    const teamsMatches = await this.model
      .sequelize?.query(
        `${this.homeScoreQuery}`,
        { type: QueryTypes.SELECT },
      );
    return teamsMatches as TeamScore[];
  }
}
