import { IMapperAPI } from 'src/common/base/imapper_api';
import { AuthDOM, TAuthDOM } from '../../domain/entities';
import { AuthAPI, TAuthAPI } from '../../domain/dto';

export class AuthMappers implements IMapperAPI<TAuthDOM, TAuthAPI> {
  fromApiToDom = (item: TAuthAPI): TAuthDOM => new AuthDOM(item);
  fromDomToApi = (item: TAuthDOM): TAuthAPI => new AuthAPI(item);
}
