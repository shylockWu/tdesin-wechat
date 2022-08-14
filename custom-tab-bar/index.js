// custom-tab-bar/index.js
Component({
  data: {
    value: "../home/index",
    list: [
      { value: "../home/index", label: "首页", icon: "app" },
      {
        value: "../mine/index",
        label: "我的",
        icon: "user",
      },
    ],
  },
  methods: {
    onChange(e) {
      const url = e.detail.value; // 获取添加的路径
      this.setData({
        value: e.detail.value,
      });

      wx.switchTab({
        url,
      });

      console.log(url);
    },
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log("在组件实例进入页面节点树时执行");
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      console.log("在组件实例被从页面节点树移除时执行");
    },
  },
  pageLifetimes: {
    show: function () {
      // 页面被展示
      console.log("页面被展示");
    },
    hide: function () {
      // 页面被隐藏
      console.log("页面被隐藏");
    },
    resize: function (size) {
      // 页面尺寸变化
    },
  },
});
