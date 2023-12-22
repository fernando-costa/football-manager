import * as bcrypt from 'bcryptjs';
import { ILoginModel } from '../Interfaces/User/ILoginModel';
import LoginModel from '../model/user/LoginModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ILogin } from '../Interfaces/User/ILogin';
import { IUser } from '../Interfaces/User/IUser';

export default class UserService {
  constructor(
    private loginModel: ILoginModel = new LoginModel(),
  ) {}

  public async login({ email, password }: ILogin) : Promise<ServiceResponse<IUser>> {
    const user = await this.loginModel.findByEmail(email);

    if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };

    if (!bcrypt.compareSync(password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    return { status: 'SUCCESSFUL', data: user };
  }
}
