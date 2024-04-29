import { TUserDOM } from '../../domain/entities';
export * from './user';

export type TDependencies = {
  users: TToolsUsers;
};

export type TToolsUsers = {
  getUsers: () => Promise<TUserDOM[]>;
  getUserById: (id: string) => Promise<TUserDOM>;
  createUser: (user: TUserDOM) => Promise<TUserDOM>;
  updateUser: (user: TUserDOM) => Promise<TUserDOM>;
  deleteUser: (id: string) => Promise<TUserDOM>;
};
export const enum USER_PROVIDER {
  TOOLS_USERS = 'tools:users',
}
