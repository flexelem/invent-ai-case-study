import { Container } from 'inversify';
import 'reflect-metadata';
import { TYPES } from './types';
import { DbConnection } from '../db/connection.db';
import { UserRepository } from '../repository/user.repository';
import { UserRoute } from '../routes/user.route';

const container = new Container();

container.bind<DbConnection>(TYPES.DbConnection).to(DbConnection);
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository).inSingletonScope();
container.bind<UserRoute>(TYPES.UserRoute).to(UserRoute);

export { container };
