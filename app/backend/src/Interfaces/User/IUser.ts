import { Identifiable } from '..';
import { ILogin } from './ILogin';

export interface IUser extends Identifiable, ILogin {
  username: string;
  role: string;
}
