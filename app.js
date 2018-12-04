//app.js
App({
  data:{
    APPID: 'wx8482a902f90eb22d',
    API_URL:'https://www.dollsay.com',
  },
  onLaunch: function () {
    //调用API从本地缓存中获取数据
      this.UserLogin(); //初次启用获取用户信息
  },
  IsLogin: function () {
    var that = this;
    // 检查登录状态
    wx.checkSession({
      success: function (e) {   //登录态未过期
        console.log("没过期");
      },
      fail: function () {   //登录态过期了
        console.log("过期了");
        that.UserLogin(); //重新获取用户信息
      }
    });

  },
  UserLogin: function () {
    var that = this;
    // 获取微信用户资料
    wx.getUserInfo({
      success: function (res) {
        wx.setStorageSync('WxProfile', res.userInfo);
        console.log(res.userInfo);
      }
    });
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.setStorage({
            key: "code",
            data: res.code
          });
          wx.request({
            url: getApp().data['API_URL'] + '/api/mini/login?code='+ res.code,
            method: 'post',
            data: {'userdata':wx.getStorageSync('WxProfile')},
            success: function (r) {
              // console.log(r);
              if(r.data.ret == 1){
                // 存储SESSIONKEY
                wx.setStorageSync('sessionkey', r.data.sessionkey);
              }else{
                // 失败
                console.log(r.data.msg);
              }
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
          return false;
        }
      },
      fail: function () {
        return false;
      }
    });
  }
})