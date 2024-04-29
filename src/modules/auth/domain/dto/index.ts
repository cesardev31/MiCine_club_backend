export type TAuthAPI = {
  email: string;
  password: string;
}

export class AuthAPI implements TAuthAPI {
  email: string;
  password: string;

  constructor(auth: TAuthAPI){
    this.email =auth.email
    this.password = auth.password
  }
}



