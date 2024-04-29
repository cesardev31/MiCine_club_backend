export class ListResponse<T = any[]> {
  items: T[];
  total: number;
  status: number;

  constructor(items: T[], total: number, status: number) {
    this.items = items;
    this.total = total;
    this.status = status;
  }
}
