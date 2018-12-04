// pages/section/user.
var App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headimg: '',
    wxname:'',
    area: '',
    num:{},
    ShowCode:false
  },
  ShowCode: function () {
    this.setData({
      ShowCode: true
    })
  },
  HideCode: function () {
    this.setData({
      ShowCode: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  GetOrderCount:function(){
    var that = this;
    wx.request({
      url: App.data['API_URL'] + '?m=Mini&a=CountOrder&sessionkey=' + wx.getStorageSync('sessionkey'),
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success:function(res){
        that.setData({
          num:res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      headimg: wx.getStorageSync('WxProfile').avatarUrl,
      wxname: wx.getStorageSync('WxProfile').nickName,
      area: wx.getStorageSync('WxProfile').province + "" + wx.getStorageSync('WxProfile').city + "" + wx.getStorageSync('WxProfile').country
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  this.GetOrderCount();
  App.IsLogin();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})