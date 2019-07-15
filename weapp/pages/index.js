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
    currentIndex: 0,
    titleSelPositon: []
  },
  created: function created() {
    wx.request({
      url: 'https://www.dzyong.com/blog/php/article/selectAll/',
      //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值

      },
      success: function success(res) {// console.log(res.data);
        // this.articles = res.data;
        // console.log(this.articles[0].title);
      }
    });
  },
  onShow: function onShow() {
    var _this = this;

    //获取tab每项坐标
    var query = wx.createSelectorQuery(); // 创建节点查询器 query

    query.selectAll('.titleSel').boundingClientRect(); // 这段代码的意思是选择Id=productServe的节点，获取节点位置信息的查询请求

    query.selectViewport().scrollOffset(); // 这段代码的意思是获取页面滑动位置的查询请求

    query.exec(function (res) {
      _this.titleSelPositon = res[0];
    });
  },
  computed: {// ...mapState([ 'counter' ]),
  },
  methods: {
    //swiper切换时会调用
    pagechange: function pagechange(e) {
      if ('touch' === e.$wx.detail.source) {
        this.currentIndex = e.$wx.detail.current;
      }
    },
    //用户点击tab时调用
    titleClick: function titleClick(e) {
      console.log(e);
      this.currentIndex = e.currentTarget.dataset.idx;
    }
  }
}, {info: {"components":{"tab":{"path":"..\\components\\tab"},"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{}}, handlers: {'5-128': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'5-129': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'5-130': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'5-131': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} });