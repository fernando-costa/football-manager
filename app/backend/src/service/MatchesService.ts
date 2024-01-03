import { IMatch } from '../Interfaces/Matches/IMatch';
import { IMatchesModel } from '../Interfaces/Matches/IMatchesModel';
import MatchesModel from '../model/matches/MatchesModel';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
import { IScore } from '../Interfaces/Matches/IScore';

export default class MatchesService {
  constructor(
    private matchesModel: IMatchesModel<IMatch> = new MatchesModel(),
  ) {}

  public async getAllMatches(inProgress?: boolean | undefined): Promise<ServiceResponse<IMatch[]>> {
    const allTeams = await this.matchesModel.findAll(inProgress);
    return { status: 'SUCCESSFUL', data: allTeams };
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
}
