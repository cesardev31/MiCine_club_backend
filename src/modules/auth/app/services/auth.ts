import { TDependencies } from '.';
import { TAuthDOM } from '../../domain/entities';

export const buildAuth = ({ auths }: TDependencies) => {
  const service = async (auth: TAuthDOM) => {
    await auths.authService(auth);
  };

  return service;
};
