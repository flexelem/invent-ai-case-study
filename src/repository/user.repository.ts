import UserModel from '../model/user.model';

export class UserRepository {

  public async getUsers() {
    const userList = await UserModel.findAll();
    return userList;
  }
}

export default new UserRepository();
