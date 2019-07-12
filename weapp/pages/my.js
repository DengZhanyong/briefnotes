"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {},
  computed: {},
  methods: {
    scan: function scan() {
      console.log('扫一扫');
      wx.scanCode({
        success: function success(res) {
          console.log(res);
        }
      });
    }
  },
  created: function created() {
    console.log(this.$parent.globalData);
  },
  onLoad: function onLoad() {}
}, {info: {"components":{},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.scan($event)
      })();
    
  }}}, models: {} });