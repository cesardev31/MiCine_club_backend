export interface IMapperAPI<TDom, TApi> {
  fromApiToDom: (item: TApi) => TDom;
  fromDomToApi: (item: TDom) => TApi;
}
