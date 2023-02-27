export const useUser = defineStore(
  'user',
  () => {
    let isLogin = $ref<boolean>(true);

    return $$({
      isLogin,
    });
  },
  {
    persist: true,
  }
);

