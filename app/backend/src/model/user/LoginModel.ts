import { IUser } from '../../Interfaces/User/IUser';
import SequelizeUser from '../../database/models/SequelizeUser';
import { ILoginModel } from '../../Interfaces/User/ILoginModel';

export default class LoginModel implements ILoginModel {
  private model = SequelizeUser;

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) return null;
    return user;
  }
}
