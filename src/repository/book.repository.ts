import BookModel from '../model/book.model';

export class BookRepository {

  public async create(name: string) {
    const book = new BookModel({
      name,
    });
    const res = await book.save();
    return res.id;
  }
}

export default new BookRepository();
