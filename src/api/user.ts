import detailsJson from '@/json/details.json';
import recordJson from '../json/record.json';

/**
 * 获取用户信息
 */
export function getDetail() {
  return detailsJson;
}

/**
 * 播放记录
 */
export function queryPlayRecordPage() {
  return recordJson;
}

