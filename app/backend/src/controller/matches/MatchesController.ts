import { Request, Response } from 'express';
import MatchesService from '../../service/MatchesService';
import mapStatusHTTP from '../../utils/mapHTTPStatus';

export default class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) {}

  public async getAllMatches(_req: Request, res: Response) {
    let inProgress: boolean | undefined;

    if (_req.query.inProgress === 'true') {
      inProgress = true;
    } else if (_req.query.inProgress === 'false') {
      inProgress = false;
    }

    const serviceResponse = await this.matchesService.getAllMatches(inProgress);
    return res.status(200).json(serviceResponse.data);
  }

  public async getMatchById(_req: Request, res: Response) {
    const { id } = _req.params;
    const serviceResponse = await this.matchesService.getMatchById(id);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }

  public async finishMatchById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.matchesService.finishMatchById(Number(id));
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }

  public async updateMatchById(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const serviceResponse = await this.matchesService
      .updateMatchById(Number(id), { homeTeamGoals, awayTeamGoals });
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }

  public async createMatch(req: Request, res: Response) {
    const {
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
    } = req.body;
    const serviceResponse = await this.matchesService.createMatch({
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(201).json(serviceResponse.data);
  }
}
