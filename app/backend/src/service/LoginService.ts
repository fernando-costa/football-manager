import * as bcrypt from 'bcryptjs';
import { ILoginModel } from '../Interfaces/User/ILoginModel';
import LoginModel from '../model/user/LoginModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ILogin } from '../Interfaces/User/ILogin';
import { IToken } from '../Interfaces/User/IToken';

export default class UserService {
  constructor(
    private loginModel: ILoginModel = new LoginModel(),
  ) {}

  public async login({ email, password }: ILogin) : Promise<ServiceResponse<IToken>> {
    const user = await this.loginModel.findByEmail(email);

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const token: IToken = { token: user.password };

    return { status: 'SUCCESSFUL', data: token };
  }
}
