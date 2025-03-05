import { Application } from 'express';
import { UserRoute } from './user.route';

export default class Routes {
  constructor(app: Application) {
    app.use('/users', new UserRoute().router);
  }
}
