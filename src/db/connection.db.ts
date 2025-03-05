import { Sequelize } from 'sequelize-typescript';
import BorrowBookModel from '../model/borrow-book.model';
import UserModel from '../model/user.model';

export class DbConnection {
  public readonly conn: Sequelize;

  constructor() {
    this.conn = new Sequelize(process.env.DATABASE_URL ?? '', {
      models: [UserModel, BorrowBookModel],
    });
    this.conn.authenticate()
      .then(() => console.log('Connection has been established successfully.'))
      .catch(err => console.error('Unable to connect to the database:', err));
  }
}
