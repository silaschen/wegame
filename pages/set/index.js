// pages/set/index.js
var App=getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    url: App.data["API_URL"],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    App.IsLogin();
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },
  formSubmit(e){
    var formdata=e.detail.value;
    var formId=e.detail.formId;

    wx.request({
      url: App.data['API_URL']+'/api/mini/token?sessionkey='+wx.getStorageSync('sessionkey'),
      method:'post',
      data:{'formId':formId,'user':formdata.input},
      success:function(res){

      }
    })
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})