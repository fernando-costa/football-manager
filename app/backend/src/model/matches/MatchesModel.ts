import { IMatch } from '../../Interfaces/Matches/IMatch';
import { ICRUDModelReader } from '../../Interfaces/ICRUDModel';
import SequelizeMatch from '../../database/models/SequelizeMatch';
import SequelizeTeam from '../../database/models/SequelizeTeam';

export default class MatchesModel implements ICRUDModelReader<IMatch> {
  private model = SequelizeMatch;

  async findAll(): Promise<IMatch[]> {
    const dbData = await this.model.findAll({ include: [
      { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
      { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
    ] });
    return dbData;
  }

  async findById(id: number): Promise<IMatch | null> {
    const dbData = await this.model.findByPk(
      id,
      { include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ] },
    );
    if (dbData === null) return null;
    return dbData;
  }
}
