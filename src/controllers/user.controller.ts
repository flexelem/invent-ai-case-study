import { Request, Response } from 'express';
import userRepository from '../repository/user.repository';

export default class UserController {

  async getById(req: Request, res: Response) {
    try {
      // @ts-ignore
      const userId = req.params.id;
      res.status(200).json({ message: 'AwesomeUser' });
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async list(_req: Request, res: Response) {
    try {
      const userList = await userRepository.getUsers();
      res.status(200).json(userList);
    } catch (err) {
      console.error(`Something bad happened err => ${err}`);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
