import { getDetail } from '@/api/user';
import type { IUser } from '@/typings/interface';

export const useUser = defineStore(
  'user',
  () => {
    let isLogin = $ref<boolean>(false);
    let details = $ref<IUser>();
    let token = $ref<string>('');

    // 更改登录状态和获取用户数据
    async function switchLoginState(_token: string) {
      token = _token;
      isLogin = true;
      await syncUserInfo();
      uni.switchTab({ url: '/pages/index/index' });
    }

    async function syncUserInfo() {
      if (!token || !isLogin) return;
      details = getDetail().data;
    }

    return $$({
      isLogin,
      switchLoginState,
      details,
    });
  },
  {
    persist: true,
  }
);

