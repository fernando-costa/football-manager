import { Request, Response } from 'express';
import LoginService from '../../service/LoginService';
import mapStatusHTTP from '../../utils/mapHTTPStatus';

export default class LoginController {
  constructor(
    private loginService = new LoginService(),
  ) {}

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const serviceResponse = await this.loginService.login({ email, password });
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json({ token: serviceResponse.data });
  }

  public async getRole(req: Request, res: Response): Promise<Response> {
    const { token } = res.locals;
    const serviceResponse = await this.loginService.getRole(token.email);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }
}
