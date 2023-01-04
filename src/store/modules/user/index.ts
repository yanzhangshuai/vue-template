import { defineStore } from 'pinia';

export const useUserStore = defineStore('app-user', {

  state: () => ({ _token: '' }),

  getters: {
    token(state): string {
      return state._token;
    }
  },

  actions: {
    /**
     *  获取用户信息
     * @returns
     */
    getUserInfo(): Promise<string> {
      return new Promise((resolve) => {
        if (this.token) {
          resolve(this.token);
          return;
        }

        // TODO: 模拟登录成功
        this._token = '0-1-2-3-4-5-6-7-8-9';
        resolve(this.token);
      });
    },

    /**
     * 登录
     */
    login() { },

    /**
     * 登出
     * @param goLogin
     */
    logout() {
      // goLogin && router.push(PageEnum.BASE_LOGIN);
    }
  },

  storage: {
    local: ['_token']
  }
});
