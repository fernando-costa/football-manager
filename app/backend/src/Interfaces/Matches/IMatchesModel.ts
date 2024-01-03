export interface IMatchesModel<T> {
  findAll(inProgress?: boolean | undefined): Promise<T[]>,
  findById(id: number): Promise<T | null>,
  updateById(id: number, updatedMatch: Partial<T>): Promise<T | null>,
}
