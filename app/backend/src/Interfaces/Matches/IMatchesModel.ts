export interface IMatchesModel<T> {
  findAll(inProgress?: boolean | undefined): Promise<T[]>,
  findById(id: number): Promise<T | null>,
}
