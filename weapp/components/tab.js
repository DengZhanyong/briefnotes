"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持

  },
  props: {
    currentIndex: {
      "default": 1,
      type: Number
    },
    title: {
      "default": [],
      type: Array
    },
    className: {
      "default": 'first',
      type: Array
    }
  },
  data: {
    titleSelPositon: []
  },
  onReady: function onReady() {
    //获取tab每项坐标
    var query = wx.createSelectorQuery()["in"](this);
    query.select('#aa').boundingClientRect(function (res) {
      console.log(res);
      res.top; // 这个组件内 #the-id 节点的上边界坐标
    }).exec(); // const query = wx.createSelectorQuery(); // 创建节点查询器 query
    // query.selectAll('.titleSel').boundingClientRect(); // 这段代码的意思是选择Id=productServe的节点，获取节点位置信息的查询请求
    // query.selectViewport().scrollOffset(); // 这段代码的意思是获取页面滑动位置的查询请求
    // query.exec(res => {
    //   console.log(res)
    //   this.titleSelPositon = res[0];
    // });
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
}, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'19-100': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleClick($event)
      })();
    
  }},'19-101': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pagechange($event)
      })();
    
  }}}, models: {} });