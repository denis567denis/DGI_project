import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Users extends Model {
  @Column({
    type: DataType.UUIDV4,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false })
  role: string;
}
