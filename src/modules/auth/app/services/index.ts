import { TAuthDOM } from '../../domain/entities';
export * from './auth';

export type TDependencies = {
  auths: TToolsAuths;
};

export type TToolsAuths = {
  authService: (auth: TAuthDOM) => Promise<void>;
};

export const enum AUTH_PROVIDERS {
  TOOLS_AUTHS = 'tools:auths',
}
