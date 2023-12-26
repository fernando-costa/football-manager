import * as bcrypt from 'bcryptjs';
import { ILoginModel } from '../Interfaces/User/ILoginModel';
import LoginModel from '../model/user/LoginModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ILogin } from '../Interfaces/User/ILogin';
import { IRole } from '../Interfaces/User/IRole';
import JWT from '../utils/JWT';

export default class UserService {
  constructor(
    private loginModel: ILoginModel = new LoginModel(),
  ) {}

  public async login({ email, password }: ILogin) : Promise<ServiceResponse<string>> {
    const user = await this.loginModel.findByEmail(email);

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const token: string = JWT.sign({ email, role: user.role });

    return { status: 'SUCCESSFUL', data: token };
  }

  public async getRole(email: string) : Promise<ServiceResponse<IRole>> {
    const user = await this.loginModel.findByEmail(email);

    if (!user) {
      return { status: 'NOT_FOUND', data: { message: 'Token not found' } };
    }

    const role: IRole = { role: user.role };

    return { status: 'SUCCESSFUL', data: role };
  }
}
