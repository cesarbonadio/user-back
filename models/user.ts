import { Model, DataTypes } from 'sequelize';
import connection from '../db/sequelize'

export class User extends Model {
    id!: number;
    name!: string;
    email!: string;
    createdAt!: Date;
    updatedAt!: Date;
}

User.init({
  id: {
    allowNull: false,
    type: DataTypes.INTEGER(),
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, {
  sequelize: connection,
  tableName: 'Users',
  modelName: 'User',
  createdAt: true,
  updatedAt: true
});
