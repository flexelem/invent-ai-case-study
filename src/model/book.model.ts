import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'books',
})
export default class BookModel extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    field: 'name',
  })
  name?: string;
}

