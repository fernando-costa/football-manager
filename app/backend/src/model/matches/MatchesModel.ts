import { IMatch } from '../../Interfaces/Matches/IMatch';
import SequelizeMatch from '../../database/models/SequelizeMatch';
import SequelizeTeam from '../../database/models/SequelizeTeam';
import { IMatchesModel } from '../../Interfaces/Matches/IMatchesModel';
import { NewEntity } from '../../Interfaces';

export default class MatchesModel implements IMatchesModel<IMatch> {
  private model = SequelizeMatch;

  private teamNames = [
    { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
    { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
  ];

  async findAll(inProgress?: boolean | undefined): Promise<IMatch[]> {
    switch (inProgress) {
      case true: {
        const dbData = await this.model.findAll({ where: { inProgress: true },
          include: this.teamNames });
        return dbData;
      }
      case false: {
        const dbData = await this.model.findAll({ where: { inProgress: false },
          include: this.teamNames });
        return dbData;
      }
      default: {
        const dbData = await this.model.findAll({ include: this.teamNames });
        return dbData;
      }
    }
  }

  async findById(id: number): Promise<IMatch | null> {
    const dbData = await this.model.findByPk(
      id,
      { include: this.teamNames },
    );
    if (dbData === null) return null;
    return dbData;
  }

  async updateById(id: number, updatedMatch: Partial<IMatch>): Promise<IMatch | null> {
    const dbData = await this.model.update({ ...updatedMatch }, { where: { id } });
    if (dbData === null) return null;
    return this.findById(id);
  }

  async createMatch(newMatch: NewEntity<IMatch>): Promise<IMatch | null> {
    const dbData = await this.model.create({ ...newMatch });
    console.log(dbData);
    const { id } = dbData.dataValues;
    return this.model.findByPk(id);
  }
}
