import { TDependencies } from '.';
import { TUserDOM } from '../../domain/entities';

export const buildUser = ({ users }: TDependencies) => {
  const service = async (user: TUserDOM) => {
    await users.createUser(user);
  };

  return service;
};
