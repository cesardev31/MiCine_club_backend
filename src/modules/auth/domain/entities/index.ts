export type TAuthDOM = {
  email: string;
  password: string;
};
export class AuthDOM implements TAuthDOM {
  email: string;
  password: string;
  constructor(auth: AuthDOM) {
    this.email = auth.email;
    this.password = auth.password;
  }
}
