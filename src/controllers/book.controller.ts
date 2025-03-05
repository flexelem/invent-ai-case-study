import { Request, Response } from 'express';
import bookRepository from '../repository/book.repository';

export default class BookController {

  async create(req: Request, res: Response) {
    try {
      const book = req.body;
      await bookRepository.create(book.name);
      res.status(201);
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
