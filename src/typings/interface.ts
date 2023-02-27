import type { OrderState, ProductLevel, ProductType } from './api';

export interface IProduct {
  id: number;
  title: string;
  coverImg: string;
  oldAmount: number;
  amount: number;
  summary: string;
  detail: string;
  uv: number;
  buyNum: number;
  teacherId: number;
  teacher: ITeacher;
  productType: ProductType;
  totalPoint: number;
  contentPoint: number;
  easyPoint: number;
  logicPoint: number;
  courseLevel: ProductLevel;
  hour: number;
  weight: number;
  episodeNum: number;
  recordState: string;
  player: string;
  stock: number;
  share: string;
  tdk: string;
  aliZipUrl: string;
  bdZipUrl: string;
  noteUrl: string;
  gmtModified: Date;
  gmtCreate: Date;
}

export interface ICategory {
  id: number;
  name: string;
  productList: IProduct[];
}

export interface IUser {
  accountId: number;
  socialId: null;
  identityType: null;
  identifier: null;
  credential: null;
  username: string;
  headImg: string;
  slogan: string;
  sex: string;
  city: string;
  sum: null;
  role: string;
  learnTime: number;
  vipRank: number;
  coin: number;
  vipExpired: string;
  tag: string;
  position: null;
  company: string;
  appid: string;
  appsecret: string;
  acl: {
    OAUTH_LOGIN: string;
    callback: string;
    SMS_AMOUNT: number;
  };
  disabled: string;
  phone: string;
  email: null;
  bindWechat: boolean;
  medal: string;
  setPassword: boolean;
  gmtCreate: null;
  gmtModified: string;
}

export interface ITeacher {
  id: number;
  name: string;
  profile: string;
  headImg: string;
  wechatQrcode: string;
  payQrcode: string;
  point: number;
  remark?: any;
  phone: string;
  online: string;
  gmtCreate: string;
  gmtModified: string;
}

export interface IEpisode {
  id: number;
  free: number;
  title: string;
  ordered: number;
  hwyunId: string;
  aliyunId: string;
  chapterId: number;
  duration: string;
  productId: number;
  gmtCreate: string;
  gmtModified: string;
}

export interface IChapter {
  id: number;
  title: string;
  ordered?: number;
  gmtCreate: string;
  productId: number;
  gmtModified: string;
  episodeList: IEpisode[];
}

export interface IComment {
  id: number;
  content: string;
  accountId: number;
  headImg: string;
  username: string;
  totalPoint: number;
  contentPoint: number;
  easyPoint: number;
  logicPoint: number;
  up: number;
  orderId: number;
  productId: number;
  learnTime: number;
  gmtCreate: Date;
}

export interface IPlayRecord {
  id: number;
  productId: number;
  accountId: number;
  learnIds: string;
  payStatus: string;
  gmtModified: string;
  gmtCreate: Date;
  productTitle: string;
  episodeTitle: string;
  productType: ProductType;
  coverImg: string;
  episodeNum: number;
  currentEpisodeId: number;
}

export interface IOneToOne {
  duration: number;
  product_detail: string;
  product_id: number;
  product_tdk: string;
  title: string;
  list: IStageItemList[];
  product_summary: string;
}

export interface ISelfStudy {
  title: string;
  list: IStageItemList[];
}

export interface IStageItem {
  id: number;
  productId: number;
  stageId: number;
  itemIndex: number;
  gmtCreate?: Date;
  gmtModified?: Date;
  buyUrl: string;
  title: string;
  coverImg: string;
  level: ProductLevel;
  buyNum: number;
  detail: string;
  oldAmount: number;
  amount: number;
}

export interface IStageItemList {
  id: number;
  stageName: string;
  stageIndex: number;
  studyLineType: string;
  summary: string;
  subTitle: string;
  gmtCreate?: Date;
  gmtModified?: Date;
  stageItemList: IStageItem[];
}

export interface IQuestion {
  id: number;
  title: string;
  content: string;
  accountId: number;
  headImg: string;
  username: string;
  uv: number;
  up: number;
  answerNum: number;
  productTitle?: any;
  episodeTitle: string;
  gmtCreate: string;
  episodeId: number;
  productId: number;
  coin: number;
  weight: number;
  del: number;
  gmtModified: string;
}

export interface IAnswer {
  id: number;
  content: string;
  accountId: number;
  headImg: string;
  username: string;
  uv: number;
  up: number;
  episodeId: number;
  productId: number;
  productTitle?: string;
  episodeTitle?: string;
  questionTitle?: string;
  questionId: number;
  gmtCreate: string;
  gmtModified: string;
  weight: number;
  del: number;
}

export interface IOrder {
  id: number;
  accountId: number;
  username: string;
  userHeadImg: string;
  outTradeNo: string;
  orderState: OrderState;
  totalAmount: number;
  payAmount: number;
  productId: number;
  productType: string;
  productTitle: string;
  productImg: string;
  isComment: number;
  operatorId: number;
  discountType: string;
  discountAmount: number;
  del: number;
  gmtCreate: Date;
}

export interface IFavorite {
  id: number;
  productId: number;
  title: string;
  coverImg: string;
  accountId: number;
  buyNum: number;
  level: string;
  detail: string;
  uv: number;
  gmtCreate: Date;
  gmtModified?: Date;
}

export interface INote {
  id: number;
  content: string;
  accountId: number;
  headImg: string;
  username: string;
  uv: number;
  up: number;
  del: number;
  episodeId: number;
  productId: number;
  weight: number;
  noteAmount?: number;
  productTitle?: string;
  episodeTitle?: string;
  coverImg?: string;
  productType?: string;
  gmtCreate: string;
  gmtModified: string;
}

export interface IAndroidStore {
  apple_store_url: string;
  default_store_url: string;
}

export interface IAppInfo {
  verIos: string;
  apkName: string;
  appToken: string;
  updateTime: string;
  verAndroid: string;
  androidStore: IAndroidStore;
}

export interface IWechatOrder {
  package: string;
  appid: string;
  sign: string;
  partnerid: string;
  prepayid: string;
  noncestr: string;
  timestamp: string;
}

