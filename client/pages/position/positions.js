var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeID: 0,
    shoreName: "",
    positionList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.navigationBarTitle || "条码库存管理"
    })
    this.setData({
      storeID: options.storeID || 0,
      shoreName: options.shoreName || ""
    });
    //获取仓库下所有仓位
    this.getAllPosition();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  },
  //获取所有产品
  getAllPosition: function () {

    var that = this;


    util.showBusy('获取仓位列表')
    var options = {
      url: config.service.positionList,
      login: true,
      data: {
        storeID: that.data.storeID
      },
      success(result) {
        util.showSuccess('获取成功')
        console.log('仓位列表获取成功', result)
        that.setData({
          positionList: result.data.data
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    }
    qcloud.request(options)
  },


  //增加仓位
  addPosition: function () {
    var that = this;
    wx.navigateTo({
      url: '../position/addPosition?navigationBarTitle=增加仓位&storeID=' + that.data.storeID
    })
  },
  //显示二维码
  showQrCode: function (event) {
    var that = this;
    wx.navigateTo({
      url: '../qrcode/show?navigationBarTitle=增加仓位&storeID=' + that.data.storeID + "&id=" + event.currentTarget.dataset.positionid
    })
  }
})