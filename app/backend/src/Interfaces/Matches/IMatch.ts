import { Identifiable } from '..';
import { IScore } from './IScore';

export interface IMatch extends Identifiable, IScore {
  homeTeamId: number;
  awayTeamId: number;
  inProgress: boolean;
}
