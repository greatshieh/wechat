Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['南开大学', '西安交通大学', '吉林大学', '南京大学', '华中科技大学'],
    objectArray: [
      {
        id: 1,
        name: '南开大学'
      },
      {
        id: 2,
        name: '西安交通大学'
      },
      {
        id: 3,
        name: '吉林大学'
      },
      {
        id: 4,
        name: '南京大学'
      },
      {
        id: 5,
        name: '华中科技大学'
      }
    ]
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

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})