import { BelongsTo, Column, DataType, Model, Table } from 'sequelize-typescript';
import BookModel from './book.model';
import UserModel from './user.model';

@Table({
  tableName: 'borrowedbooks',
})
export default class BorrowBookModel extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  })
  id?: number;

  @BelongsTo(() => UserModel, 'id')
  userId?: string;

  @BelongsTo(() => BookModel, 'id')
  bookId?: string;

  @Column({
    type: DataType.INTEGER,
  })
  score?: number;
}
