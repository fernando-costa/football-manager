import { IMatch } from '../Interfaces/Matches/IMatch';
import { IMatchesModel } from '../Interfaces/Matches/IMatchesModel';
import MatchesModel from '../model/matches/MatchesModel';
import {
  ServiceMessage,
  ServiceResponse,
} from '../Interfaces/ServiceResponse';
import { IScore } from '../Interfaces/Matches/IScore';
import { NewEntity } from '../Interfaces';
import { ITeamsModel } from '../Interfaces/Teams/ITeamsModel';
import TeamsModel from '../model/teams/TeamsModel';

export default class MatchesService {
  constructor(
    private matchesModel: IMatchesModel<IMatch> = new MatchesModel(),
    private teamsModel: ITeamsModel = new TeamsModel(),
  ) {}

  public async getAllMatches(inProgress?: boolean | undefined): Promise<ServiceResponse<IMatch[]>> {
    const allTeams = await this.matchesModel.findAll(inProgress);
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async getMatchById(id: string): Promise<ServiceResponse<IMatch | null>> {
    const match = await this.matchesModel.findById(Number(id));
    if (!match) {
      return { status: 'NOT_FOUND',
        data: { message: `Match with id ${id} not found` } };
    }
    return { status: 'SUCCESSFUL', data: match };
  }

  public async finishMatchById(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const match = await this.matchesModel.findById(Number(id));
    if (!match) return { status: 'NOT_FOUND', data: { message: `Match ${id} not found` } };
    const finishedMatch = { ...match, inProgress: false };
    await this.matchesModel.updateById(Number(id), finishedMatch);
    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }

  public async updateMatchById(id: number, score: IScore):
  Promise<ServiceResponse<ServiceMessage>> {
    const { homeTeamGoals, awayTeamGoals } = score;
    const match = await this.matchesModel.findById(Number(id));
    if (!match) return { status: 'NOT_FOUND', data: { message: `Match ${id} not found` } };
    const updatedMatch = { ...match, homeTeamGoals, awayTeamGoals };
    await this.matchesModel.updateById(Number(id), updatedMatch);
    return { status: 'SUCCESSFUL', data: { message: 'Updated' } };
  }

  public async createMatch(newMatch: NewEntity<IMatch>): Promise<ServiceResponse<IMatch | null>> {
    const { homeTeamId, awayTeamId } = newMatch;
    const validHomeTeam = await this.teamsModel.findById(Number(homeTeamId));
    const validAwayTeam = await this.teamsModel.findById(Number(awayTeamId));
    if (!validHomeTeam || !validAwayTeam) {
      return { status: 'NOT_FOUND',
        data: { message: 'There is no team with such id!' } };
    }

    const createdMatch = await this.matchesModel.createMatch(newMatch);
    return { status: 'SUCCESSFUL', data: createdMatch };
  }
}
