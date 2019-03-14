const delayPromise = () => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(true);
    }, 3000);
  })
}

export default {

  getUserInfo(withCredentials: boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      wx.getUserInfo({
        withCredentials: withCredentials,
        lang: 'en',
        success: (res: any) => {
          resolve({
            userInfo: res.userInfo,
            rawData: res.rawData,
            signature: res.signature,
            encryptedData: res.encryptedData,
            iv: res.iv
          })
        },
        fail: (err: any) => {
          reject(err);
        }
      });
    });
  },

  login(): Promise<any> {
    return new Promise((resolve, reject) => {
      wx.login({
        success: (res: wx.LoginSuccessCallbackResult) => {
          if(res.code) {
            resolve(res.code);
          } else {
            reject({
              errMsg: 'Login failed'
            })
          }
        }
      })
    })
  },

  mockDelay(delayItems: () => Promise<any>): Promise<any> {
    return delayPromise().then(() => {
      return delayItems();
    })
  }

}