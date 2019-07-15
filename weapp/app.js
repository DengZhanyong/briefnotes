"use strict";

var _core = _interopRequireDefault(require('vendor.js')(0));

var _eventHub = _interopRequireDefault(require('common/eventHub.js'));

var _x = _interopRequireDefault(require('vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_x["default"]);

_core["default"].app({
  // hooks: {
  //   // App 级别 hook，对整个 App 生效
  //   // 同时存在 Page hook 和 App hook 时，优先执行 Page hook，返回值再交由 App hook 处
  //   'before-setData': function(dirty) {
  //     console.log('setData dirty: ', dirty);
  //     return dirty;
  //   }
  // },
  globalData: {
    userInfo: null,
    aa: 'aa'
  },
  onLaunch: function onLaunch() {
    var that = this;
    wx.getUserInfo({
      success: function success(res) {// that.globalData = res
        // console.log(that.globalData)
      }
    });
  },
  methods: {}
}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1});