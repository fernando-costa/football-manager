import { ITeam } from '../../Interfaces/Teams/ITeam';
import { ITeamsModel } from '../../Interfaces/Teams/ITeamsModel';
import SequelizeTeam from '../../database/models/SequelizeTeam';

export default class TeamsModel implements ITeamsModel {
  private model = SequelizeTeam;

  async findAll(): Promise<ITeam[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, teamName }) => (
      { id, teamName }
    ));
  }

  async findById(id: number): Promise<ITeam | null> {
    const dbData = await this.model.findByPk(id);
    if (dbData === null) return null;
    const { teamName }: ITeam = dbData;
    return { id, teamName };
  }
}
