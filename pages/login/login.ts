// import { IMyApp } from '../../app';
import userService from '../../services/user-service';

// const app = getApp<IMyApp>()

Page({
   data: {
     signing: true,
     signOnLabel: function() {
       return this.signing ? "Signing On" : "Click here to Login";
     }
   },
   onLoad: async () => {
    // let userInfo = await userService.getUserInfo(true);
    // debugger;
    // if(app.globalData.userInfo){
    //   wx.redirectTo({
    //     url: 'logs'
    //   })
    // }

    // userService.login().then(code => {
    //   console.log(code);

    //   wx.redirectTo({
    //     url: '../logs/logs'
    //   });
    // })

    userService.mockDelay(userService.login).then(code => {
      console.log(code);

      wx.redirectTo({
        url: '../index/index'
      });
    })
  },
  // getUserInfo(e: any) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   // this.setData!({
  //   //   userInfo: e.detail.userInfo,
  //   //   hasUserInfo: true
  //   // })
  // }
})