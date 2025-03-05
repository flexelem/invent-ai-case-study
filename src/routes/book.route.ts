import { Router } from 'express';
import BookController from '../controllers/book.controller';

export class BookRoute {
  router = Router();
  bookController = new BookController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post('/', this.bookController.create);
  }
}
