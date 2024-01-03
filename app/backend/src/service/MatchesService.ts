import { IMatch } from '../Interfaces/Matches/IMatch';
import { ICRUDModelReader } from '../Interfaces/ICRUDModel';
import MatchesModel from '../model/matches/MatchesModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class MatchesService {
  constructor(
    private matchesModel: ICRUDModelReader<IMatch> = new MatchesModel(),
  ) {}

  public async getAllMatches(): Promise<ServiceResponse<IMatch[]>> {
    const allTeams = await this.matchesModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async getMatchById(id: number): Promise<ServiceResponse<IMatch>> {
    const match = await this.matchesModel.findById(Number(id));
    if (!match) return { status: 'NOT_FOUND', data: { message: `Match ${id} not found` } };
    return { status: 'SUCCESSFUL', data: match };
  }
}
