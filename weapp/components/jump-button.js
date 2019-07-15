"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    title: {
      "default": '默认文字',
      type: String
    },
    pageUrl: {
      "default": '',
      type: String
    },
    info: {
      "default": '',
      type: String
    }
  },
  methods: {
    navigatorTo: function navigatorTo() {
      if (this.pageUrl == '') {
        wx.showToast({
          icon: 'none',
          title: '此模块暂未开放'
        });
        return false;
      }

      console.log(this.pageUrl);
      wx.navigateTo({
        url: this.pageUrl
      });
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'20-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.navigatorTo($event)
      })();
    
  }}}, models: {} });