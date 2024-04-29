export type TUserAPI = {
  _id: string;
  username: string;
  password: string;
  email: string;
};

export class UserAPI implements TUserAPI {
  _id: string;
  username: string;
  password: string;
  email: string;

  constructor(user: TUserAPI) {
    this._id = user._id;
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
  }
}
