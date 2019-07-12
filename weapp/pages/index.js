"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _store = _interopRequireDefault(require('../store/index.js'));

var _test = _interopRequireDefault(require('../mixins/test.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  // hooks: {
  //   // Page 级别 hook, 只对当前 Page 的 setData 生效。
  //   'before-setData': function (data) {
  //     console.log('数据发生了改变：',data)
  //     return data
  //   }
  // },
  mixins: [_test["default"]],
  data: {
    articles: [],
    num: 0
  },
  created: function created() {
    var _this = this;

    wx.request({
      url: 'https://www.dzyong.com/blog/php/article/selectAll/',
      //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值

      },
      success: function success(res) {
        console.log(res.data);
        _this.articles = res.data;
        console.log(_this.articles[0].title);
      }
    });
  },
  computed: {// ...mapState([ 'counter' ]),
  },
  methods: {}
}, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{}}, handlers: {}, models: {} });