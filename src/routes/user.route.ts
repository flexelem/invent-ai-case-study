import { Router } from 'express';
import UserController from '../controllers/user.controller';

export class UserRoute {
  router = Router();
  userController = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', this.userController.list);
    this.router.get('/:id', this.userController.getById);
  }
}
