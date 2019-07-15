"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {},
  computed: {},
  methods: {
    scan: function scan() {
      wx.scanCode({
        success: function success(res) {
          console.log(res);
        }
      });
    }
  },
  created: function created() {},
  onLoad: function onLoad() {}
}, {info: {"components":{"jump-button":{"path":"..\\components\\jump-button"},"Interlayer":{"path":"..\\components\\Interlayer"}},"on":{}}, handlers: {'5-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.scan($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"jump-button":{"path":"..\\components\\jump-button"},"Interlayer":{"path":"..\\components\\Interlayer"}},"on":{}}, handlers: {'5-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.scan($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"jump-button":{"path":"..\\components\\jump-button"},"Interlayer":{"path":"..\\components\\Interlayer"}},"on":{}}, handlers: {'5-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.scan($event)
      })();
    
  }}}, models: {} });