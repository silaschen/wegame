// pages/section/index.js
var App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    url: App.data["API_URL"],
    ShowCode:false
  }
  ,
  ShowCode:function(){
    this.setData({
      ShowCode:true
    })
  },
  HideCode:function(){
    this.setData({
      ShowCode: false
    })
  },
  //获取轮播图
  GetBanner:function(){
    var that = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: App.data['API_URL']+'/api/mini/slide',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success:function(res){
        wx.hideLoading();
        that.setData({
          banner:res.data.imgs
        });
      }
    })
  },
  //联系我们
  CallMe: function () {
    wx.makePhoneCall({
      phoneNumber: '18318555555' //仅为示例，并非真实的电话号码
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
   this.GetBanner();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
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