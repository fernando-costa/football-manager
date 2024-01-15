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

  async teamsMatches(matchType: string, opponent: string): Promise<TeamScore[] | undefined> {
    const teamsScores = await this.model
      .sequelize?.query(
        this.scoreQuery(matchType, opponent),
        { type: QueryTypes.SELECT },
      );
    return teamsScores as TeamScore[];
  }

  static sumStats(homeScore: TeamScore, awayScore: TeamScore): TeamScore {
    const partialStats = {
      name: homeScore.name,
      totalPoints: homeScore.totalPoints + awayScore.totalPoints,
      totalGames: homeScore.totalGames + awayScore.totalGames,
      totalVictories: homeScore.totalVictories + awayScore.totalVictories,
      totalDraws: homeScore.totalDraws + awayScore.totalDraws,
      totalLosses: homeScore.totalLosses + awayScore.totalLosses,
      goalsFavor: homeScore.goalsFavor + awayScore.goalsFavor,
      goalsOwn: homeScore.goalsOwn + awayScore.goalsOwn,
      goalsBalance: homeScore.goalsBalance + awayScore.goalsBalance,
    };
    return {
      ...partialStats,
      efficiency: parseFloat(((partialStats.totalPoints / (partialStats.totalGames * 3)) * 100)
        .toFixed(2)),
    };
  }

  static sortTeamScores = (teamScores: TeamScore[]) => teamScores.sort((team1, team2) => {
    if (team1.totalPoints !== team2.totalPoints) {
      return team2.totalPoints - team1.totalPoints;
    }

    if (team1.totalVictories !== team2.totalVictories) {
      return team2.totalVictories - team1.totalVictories;
    }

    if (team1.goalsBalance !== team2.goalsBalance) {
      return team2.goalsBalance - team1.goalsBalance;
    }

    return team2.goalsFavor - team1.goalsFavor;
  });

  static getLeaderBoard(
    homeScore: TeamScore[],
    awayScore: TeamScore[],
  ): TeamScore[] {
    const teamScore = homeScore.map((team) => {
      const awayTeam = awayScore.find((away) => away.name === team.name);
      return this.sumStats(team, awayTeam || {} as TeamScore);
    });
    return teamScore;
  }

  async getScore(matchType: string): Promise<TeamScore[] | undefined> {
    if (matchType === 'home') {
      return this.teamsMatches(matchType, 'away');
    } if (matchType === 'away') {
      return this.teamsMatches(matchType, 'home');
    }
    const home = await this.teamsMatches('home', 'away');
    const away = await this.teamsMatches('away', 'home');
    if (home && away) {
      const unsorted = LeaderboardModel.getLeaderBoard(home, away);
      return LeaderboardModel.sortTeamScores(unsorted);
    }
  }
}
