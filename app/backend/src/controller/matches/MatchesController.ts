import { Request, Response } from 'express';
import MatchesService from '../../service/MatchesService';
import mapStatusHTTP from '../../utils/mapHTTPStatus';

export default class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) {}

  public async getAllMatches(_req: Request, res: Response) {
    const serviceResponse = await this.matchesService.getAllMatches();
    return res.status(200).json(serviceResponse.data);
  }

  public async getMatchById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.matchesService.getMatchById(Number(id));
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }
}
