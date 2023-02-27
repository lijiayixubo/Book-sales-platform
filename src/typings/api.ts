import type { ICategory, IProduct } from './interface';

export type Duplicate<S extends string, T> = { [K in S]: T };

export type OrderState = 'CANCEL' | 'PAY' | 'NEW';
export type ProductLevel = 'JUNIOR' | 'MIDDLE' | 'SENIOR';
export type ProductEpisodeIds = Duplicate<'episodeId' | 'productId', number>;
export type ProductType = 'COURSE' | 'FOREVER_VIP' | 'YEAR_VIP' | string;
export type SendCodeType = 'login' | 'register' | 'change';
export type Data<T> = T extends undefined | null ? null : T;
export type SubCategoryList = ICategory & {
  pid: number;
  level: ProductLevel;
};

export interface IPageRequest {
  page: number;
  size: number;
}

export type IBizIdPageRequest = IPageRequest & { bizId: number };

export interface ICategoryStateRequest {
  page: number;
  size: number;
  categoryId?: number;
  orderType: 'new' | 'hot';
  categoryParentId?: number;
}

export interface IPage<T> {
  total_page: number;
  current_data: T[];
  total_record: number;
}

export interface IResponsePage<T> {
  msg: string;
  code: number;
  data: IPage<T>;
}

export interface IResponseBase<T> {
  msg: string;
  code: number;
  data: Data<T>;
}

export interface ICardResponse {
  id: number;
  name: string;
  icon: string;
  summay: string;
  rowNum: number;
  weight: number;
  cardType: string;
  columnNum: number;
  productList: IProduct[];
}

export interface IBannerResponse {
  id: number;
  del: number;
  name: string;
  imgUrl: string;
  pcLink: string;
  h5Link: string;
  expired: string;
  location: string;
  gmtCreate: string;
  gmtModified: string;
}

export type ICategoryResponse = (ICategory & {
  subCategoryList: SubCategoryList;
})[];

export interface IPlayUrl {
  vodType: 'HWYUN';
  duration: number;
  episodeId: number;
  playResult: string;
}

