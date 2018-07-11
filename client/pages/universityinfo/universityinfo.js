const qcloud = require('../../vendor/wafer2-client-sdk/index')

const config = require('../../config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //学校列表，需要从服务器获得
    array: [],
    university: {},
  },

  getUniversityList() {
    wx.showLoading({
      title: '加载院校列表',
    })

    qcloud.request({
      url: config.service.universityList,
      success: result => {
        wx.hideLoading()

        let data = result.data.data

        var temp = new Array()

        data.forEach(function(element) {
          temp.push(element.name)
        })

        if (!data.code) {
          this.setData({
            array: temp
          })
        } else {
          wx.showToast({
            title: '院校列表加载错误',
          })
        }
      },

      fail: () => {
        wx.hideLoading()

        wx.showToast({
          title: '院校列表加载错误',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getUniversityList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  getUniversityInfo(name) {
    wx.showLoading({
      title: '加载院校介绍...',
    })

    qcloud.request({
      url: config.service.universityInfo + name,
      success: result => {
        wx.hideLoading()

        let data = result.data.data

        if (!data.code) {
          this.setData({
            university: data
          })
          this.showList(data)
        } else {
          setTimeout(() => {
            wx.navigateBack()
          }, 2000)
        }
      },
      fail: () => {
        wx.hideLoading()

        setTimeout(() => {
          wx.navigateBack()
        }, 2000)
      }
    })
  },

  showList(data) {
    for (var info in data){
      if (data[info] == null){
        console.log(info)
      }else{
        console.log(data[info])
      }
    }
  },

  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)

    var index = e.detail.value

    this.setData({
      index: e.detail.value
    })

    var name = this.data.array[index]

    this.getUniversityInfo(name)
  }
})