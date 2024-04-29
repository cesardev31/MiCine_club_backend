import { IMapperAPI } from 'src/common/base/imapper_api';
import { UserDOM, TUserDOM } from '../../domain/entities';
import { UserAPI, TUserAPI } from '../../domain/dto';

export class UserMapper implements IMapperAPI<TUserDOM, TUserAPI> {
  fromApiToDom = (item: TUserAPI): TUserDOM => new UserDOM(item);
  fromDomToApi = (item: TUserDOM): TUserAPI => new UserAPI(item);
}
