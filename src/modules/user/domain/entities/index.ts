export type TUserDOM = {
  _id: string;
  username: string;
  email: string;
  password: string;
};

export class UserDOM implements TUserDOM {
  _id: string;
  username: string;
  email: string;
  password: string;

  constructor(user: TUserDOM) {
    this._id = user._id;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
  }
}
