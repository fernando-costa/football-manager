import { IUser } from './IUser';

export interface ILoginModel {
  findByEmail(email: string): Promise<IUser | null>
}
