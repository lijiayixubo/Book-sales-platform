import bannberJson from '@/json/banner.json';
import cardJson from '@/json/card.json';

/**
 * 首页的轮播图接口
 */
export function getBannerList() {
  return bannberJson;
}

/**
 * 首页的课程卡片接口
 */
export function getCardList() {
  return cardJson;
}

