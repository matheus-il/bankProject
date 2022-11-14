export interface Transfer {
  id?: string;
  value: number;
  account: number | string;
  date?: Date;
}
